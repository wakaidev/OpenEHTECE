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

session = requests.Session()

def get_shoe_product_payload(soup):
    """Accepts soup of the product page, returns payload for proper size"""

    product_options = soup.select('#product-select option')
    for product in product_options:
        if ' {} '.format(shoe_size) in product.text:  # format so doesn't detect size in price
            product_id = product['value']
            print(product_id)
            break

    if product_id:
        bot_key_elem = soup.select('#key')[0]
        bot_key = bot_key_elem['value']

        print(bot_key)
    else:
        print('Could not find correct size')
        return

    payload = {
        'id': product_id,
        'properties[bot - key]': bot_key
    }

    return payload


def add_to_cart(early_link, shoe_size): # TODO: support for products other than shoes

    response = session.get(early_link)
    content = response.content
    soup = bs(content, 'html.parser')

    payload = get_shoe_product_payload(soup)

    response = session.post(base_url + '/cart/add.js', data=payload)
    content = response.content
    soup = bs(content, 'html.parser')
    print(soup)
    cart_count = soup.find('span', {'class': 'cartcount'})
    print(cart_count)
    print('{} items now in cart'.format)









def check_out():

    cart_url = 'http://shop.bdgastore.com/checkout'
    response = session.get(cart_url)
    soup = bs(response.content, 'html.parser')

    #same action for each contact and shipping info
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

    # Shipping Method
    soup = bs(response.text, 'html.parser')
    form = soup.find('form', {'action': re.compile('(?<=shop.bdgastore.com)(.*)(?=/checkouts/)')})
    # shipping = soup.find('div', {'class': re.compile('(shopify-)(\d+)')})
    # shipping = soup.select('body > div.content > div > div.main > div.main__content > div > form > div.step__sections > div.section.section--shipping-method > div.section__content > div > div > div > label')
    radio = soup.find('input', 'checkout[shipping_rate][id]')
    radio = soup.select('#checkout_shipping_rate_id_shopify-10001-200-1300')
    print(radio)

    payload = {
        'utf8': '✓',
        '_method': 'patch',
        'authenticity_token': form.find('input', {'name': 'authenticity_token'})['value'],
        # 'checkout[shipping_rate][id]': form.find('input', {'name': 'checkout[shipping_rate][id]'})['value'],
        'previous_step': 'shipping_method',
        'step': 'payment_method',
        # 'checkout[shipping_rate][id]': 'shopify -$50.01 - 100 - 9.00'
    }

    # print(payload)

    response = session.post(form['action'], data=payload)
    print('after posting shipping info, url is {}'.format(response.url))
    assert('step=payment' in response.url)
    print('$100.01-200' in response.text)
    print(response.url)


    #Payment
    soup = bs(response.text, 'html.parser')
    form = soup.find('form', {'action': re.compile('deposit')})


    payload = {
        'utf8': '✓',
        'authenticity_token': form.find('input', {'name': 'authenticity_token'})['value'],
        'previous_step': 'payment_method',
        'step': '',
        's': '',
        'c': form.find('input', {'name': 'c'})['value'],
        'd': form.find('input', {'name': 'd'})['value'],
        'checkout[payment_gateway]': form.find('input', {'name': 'checkout[payment_gateway]'})['value'],
        'checkout[credit_card][number]': card_number,
        'checkout[credit_card][name]': first_name + ' ' + last_name,
        'checkout[credit_card][month]': card_exp_month.strip('0'),
        'checkout[credit_card][year]': card_exp_year,
        'expiry': card_exp_month + ' / ' + card_exp_year[-2:],
        'checkout[credit_card][verification_value]': card_cvv,
        'checkout[different_billing_address]': 'false',
        'checkout[buyer_accepts_marketing]': '0',
        'complete': '1',
        'checkout[client_details][browser_width]': '665',
        'checkout[client_details][browser_height]': '705',
        'checkout[client_details][javascript_enabled]': '1'
    }

    print(payload)

    response = session.post(form['action'], data=payload)

    print('after posting payment info, url is {}'.format(response.url))



start = timeit.default_timer()
add_to_cart(early_link, 10.5)
check_out()
stop = timeit.default_timer()
print('{} seconds'.format(stop - start))







