#!/usr/bin/env python3
import requests
import re
import timeit
from bs4 import BeautifulSoup as bs
from getconf import *

# User input
size = '6.5'
use_early_link = True
early_link = 'http://www.slamjamsocialism.com/sneakers/19710-eqt-running-support-sneakers.html'

def checkout():
    response = session.get('https://caliroots.com/cart/view')
    soup = bs(response.text, 'html.parser')

    state_ids = soup.find_all('option')
    regexp = re.compile(shipping_state)
    state_id = ''
    for state in state_ids:
        if regexp.search(state.getText()) is not None:
            state_id = state['value']
            continue

    form = soup.find('form', {'action' : '/cart/process'})

    payload = {
        '_AntiCsrfToken' : form.find('input', {'name' : '_AntiCsrfToken'})['value'],
        'country' : 'US',
        'region' : state_id,
        'id' : form.find('input', {'name' : 'id'})['value'],
        'paymentProvider.giftcard.code' : '',
        'emailAddress' : email,
        'repeatEmailAddress' : email,
        'postalCodeQuery' : '',
        'firstName' : first_name,
        'lastName' : last_name,
        'addressLine2' : shipping_address_1,
        'addressLine3' : shipping_apt_suite,
        'postalCode' : shipping_zip,
        'city' : shipping_city,
        'phoneNumber' : phone_number,
        'termsAccepted' : 'true'
    }
    print(payload)
    response = session.post('https://caliroots.com/cart/process', data=payload)
    print (response.headers)

    '''
    payload = {
        '__VIEWSTATEGENERATOR': '277BF4AB',
        'blackbox': '',
        'ShippingCountryId': '222',  # USA code
        'ShippingFirstName': first_name,
        'ShippingLastName': last_name,
        'ShippingAddress1': shipping_address_1,
        'ShippingAddress2': shipping_address_2,
        'ShippingAptSuite': shipping_apt_suite,
        'ShippingZip': shipping_zip,
        'ShippingCity': shipping_city,
        'ShippingStateId': state_id,
        'ShippingMethodId': '1',
        'BillingAddressSameAsSippingAddress': 'true',
        'BillingFirstName': first_name,
        'BillingLastName': last_name,
        'BillingCardType': card_type,
        'BillingCardNumber': card_number,
        'BillingCardExpirationMonth': card_exp_month,
        'BillingCardExpirationYear': card_exp_year,
        'BillingCardSecurityCode': card_cvv,
        'OrderNote': '',
        'PhoneNumber': phone_number,
        'GuestEmail': email,
        'CacheStatus': 'cached',
        'HasShippingAddress': 'false',
        'PayWithPayPal': 'false',
        'CustomerEmailAddress': '',
        'CustomerFirstName': '',
        'CustomerLastName': ''
    }

    response = session.post('https://www.shiekhshoes.com/api/ShoppingCart/ProcessCheckout', data=payload)
    print(response.text)
    '''


# Main
start = timeit.default_timer()

session = requests.session()

if use_early_link:
    response = session.get(early_link)
    soup = bs(response.text, 'html.parser')

    options = soup.find_all('option')
    regexp = re.compile(size.replace('.', ','))
    product_id = ''

    for option in options:
        if regexp.search(option.getText()) is not None:
            product_id = option['value']
            continue

    payload = {
        'id' : product_id,
        'partial' : 'ajax-cart'
    }

    response = session.post('https://caliroots.com/cart/add', data=payload)
    soup = bs(response.text, 'html.parser')
    checkout()

stop = timeit.default_timer()
print (stop - start)
