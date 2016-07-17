#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
import re
import requests
import timeit
from bs4 import BeautifulSoup as bs
from getconf import *


# User input
use_early_link = True
base_url = 'http://shop.bdgastore.com'
early_link = base_url + '/collections/footwear/products/nike-tennis-classic-ultra-flyknit-5'
shoe_size = '10.5'

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}



def add_to_cart(early_link, shoe_size):
    session = requests.Session()
    response = session.get(early_link)
    content = response.content
    soup = bs(content, 'html.parser')

         
    product_options = soup.select('#product-select option')

    # Retrieve payload
    for product in product_options:
        if ' {} '.format(shoe_size) in product.text:  # format so doesn't detect size in price
            product_id = product['value']
            print(product_id)
    if product_id:
        bot_key_elem = soup.select('#key')[0]
        bot_key = bot_key_elem['value']

        print(bot_key)

    payload = {
    'id': product_id,
    'properties[bot - key]': bot_key
    }

    result = session.post(base_url + '/cart/add.js', data=payload, headers=headers)

    # print(result.url)

    return session



def check_out(session):

    cart_url = 'http://shop.bdgastore.com/checkout'
    response = session.get(cart_url)
    soup = bs(response.content, 'html.parser')

    #same form for each step of checkout
    form = soup.find('form', {'action': re.compile('(?<=shop.bdgastore.com)(.*)(?=/checkouts/)')})

    # Contact Info
    payload = {
    'utf8': '✓',
    '_method': 'patch',
    'authenticity_token': form.find('input', {'name': 'authenticity_token'})['value'],
    'previous_step': 'contact_information',
    'checkout[email]': email,
    'checkout[shipping_address][first_name]': first_name,
    'checkout[shipping_address][last_name]': last_name,
    'checkout[shipping_address][company]': '',
    'checkout[shipping_address][address1]': shipping_address_1,
    'checkout[shipping_address][address2]': shipping_apt_suite,
    'checkout[shipping_address][city]': shipping_city,
    'checkout[shipping_address][country]': 'United States',
    'checkout[shipping_address][province]': '',
    'checkout[shipping_address][province]': '',
    'checkout[shipping_address][province]': shipping_state,
    'checkout[shipping_address][zip]': shipping_zip,
    'checkout[shipping_address][phone]': phone_number,
    'remember_me': 'false',
    'step': 'shipping_method',
    }

    response = session.post(form['action'], data=payload)

    print('after posting contact info, url is {}'.format(response.url))
    assert('step=shipping_method' in response.url)
    print('Sweeney' in response.text)

    # SHipping Method
    soup = bs(response.content, 'html.parser')
    form = soup.find('form', {'action': re.compile('(?<=shop.bdgastore.com)(.*)(?=/checkouts/)')})
    shipping = soup.find('div', {'class': re.compile('(shopify-)(\d+)')})
    print(form)

    payload = {
        'utf8': '✓',
        '_method': 'patch',
        'authenticity_token': form.find('input', {'name': 'authenticity_token'})['value'],
        'previous_step': 'shipping_method',
        'step': 'payment_method',
        'checkout[shipping_rate][id]': 'shopify -$50.01 - 100 - 9.00'
    }

    response = session.post(form['action'], data=payload)
    print('after posting shipping info, url is {}'.format(response.url))
    assert('step=payment' in response.url)
    print('$100.01-200' in response.text)
    print(response.url)




    #
    # forms = soup.find_all('form')
    # for f in forms:
    #     print(f['action'])





    #
    # form = soup.find('form')
    # for attrib in form.attrs:
    #
    # checkout_url = base_url + form['action']  # For later
    # response = session.post(checkout_url, data=payload)








# response = requests.get(base_url + '/checkout.js', data=payload)
# print(response)









    



session = add_to_cart(early_link, 10.5)
check_out(session)







