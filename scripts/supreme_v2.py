from multiprocessing.dummy import Pool as ThreadPool
from bs4 import BeautifulSoup as bs
import requests
import sys
import json
import time
import datetime
from getconf import *
from atclibs import *

# Constants
base_url = 'http://www.supremenewyork.com'

# Inputs
keyword_category = []
keyword_model = []
keyword_style = []
sizes = []
matches = []
products_in_cart = False
keyword = True
eu = False
country_abbrv = ''
_card = ''

# Global
start = tick()
checkout_session = requests.Session()
checkout_session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) '
              'Chrome/52.0.2743.116 Safari/537.36',
    'Upgrade-Insecure-Requests': '1',
    'DNT': '1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en-US,en;q=0.8,da;q=0.6'
})

search_session = requests.Session()
search_session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) '
              'Chrome/52.0.2743.116 Safari/537.36',
    'Upgrade-Insecure-Requests': '1',
    'DNT': '1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en-US,en;q=0.8,da;q=0.6'
})

# Functions
def add_to_cart(session, url, counter):
    global products_in_cart
    response = session.get(url)
    soup = bs(response.text, "html.parser")
    product_name = soup.find('h1', {'itemprop': 'name'}).string
    print('\n' + 'Adding {} to cart...'.format(product_name))
    
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/52.0.2743.116 Safari/537.36',
        'X-XHR-Referer': 'http://www.supremenewyork.com/shop/all',
        'Referer': 'http://www.supremenewyork.com/shop/all/',
        'Accept': 'text/html, application/xhtml+xml, application/xml',
        'Accept-Encoding': 'gzip, deflate, sdch',
        'Accept-Language': 'en-US,en;q=0.8,da;q=0.6',
        'DNT': '1'
    })
    
    form = soup.find('form', {'id': 'cart-addf'})
    csrf_token = soup.find('meta', {'name': 'csrf-token'})['content']
    
    if sizes[counter].lower() == ('n/a'):
        size_input = form.find('input', {'id': 'size'})
    else:
        size_input = form.find('option', string=sizes[counter].lower().capitalize())

    size_id = ''
    if size_input is not None:
        size_id = size_input['value']
    else:
        print('Size is out of stock!')
        return False
    
    if form is not None:
        cart = 'cart'
        if eu:
            cart = 'basket'
        
        payload = {
            'utf8': '✓',
            'authenticity_token': form.find('input', {'name': 'authenticity_token'})['value'],
            'size': size_id,
            'commit': 'add to ' + cart
        }
        
        headers = {
            'Accept': '*/*;q=0.5, text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            'Origin': 'http://www.supremenewyork.com',
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Referer': url,
            'X-XHR-Referer': None,
            'X-CSRF-Token': csrf_token,
            'Accept-Encoding': 'gzip, deflate'
        }
        
        session.post(base_url + form['action'], data=payload, headers=headers)
        products_in_cart = True
        print('Added {} to cart!'.format(product_name))
        return True
    else:
        return False


def checkout(session):
    print('Filling out checkout info...')
    response = session.get('https://www.supremenewyork.com/checkout')
    soup = bs(response.text, 'html.parser')
    form = soup.find('form', {'action': '/checkout'})
    
    csrf_token = soup.find('meta', {'name': 'csrf-token'})['content']
    headers = {
        'Accept': 'text/html, */*; q=0.01',
        'X-CSRF-Token': csrf_token,
        'X-Requested-With': 'XMLHttpRequest',
        'Referer': 'https://www.supremenewyork.com/checkout',
        'Accept-Encoding': 'gzip, deflate, sdch, br'
    }
    
    year = card_exp_year
    if len(card_exp_year) == 2:
        year = '20' + card_exp_year

    payload = {
        'utf8': '✓',
        'authenticity_token': form.find('input', {'name': 'authenticity_token'})['value'],
        'order[billing_name]': first_name + ' ' + last_name,
        'order[email]': email,
        'order[tel]': format_phone(phone_number),
        'order[billing_address]': shipping_address_1,
        'order[billing_address_2]': shipping_apt_suite,
        'order[billing_zip]': shipping_zip,
        'order[billing_city]': shipping_city,
        'order[billing_state]': shipping_state,
        'order[billing_country]': country_abbrv,
        'same_as_billing_address': '1',
        'store_credit_id': '',
        'credit_card[type]': _card,
        'credit_card[cnb]': format_card(card_number),
        'credit_card[month]': card_exp_month,
        'credit_card[year]': year,
        'credit_card[vval]': card_cvv,
        'order[terms]': '1',
        'hpcvv': '',
        'cnt': '1'
    }
    
    checkout_payload = payload.copy()
    
    if eu:
        payload['order[tel]'] = phone_number
        payload['order[billing_address_2]'] = shipping_address_2
        payload['order[billing_address_3]'] = shipping_apt_suite
        del payload['store_credit_id']
        del payload['order[billing_state]']
    
    session.get('https://www.supremenewyork.com/checkout.js', data=payload, headers=headers)
    
    if eu:
        payload['order[tel]'] = phone_number
        checkout_payload['order[billing_address_2]'] = shipping_address_2
        checkout_payload['order[billing_address_3]'] = shipping_apt_suite
        del checkout_payload['order[billing_state]']
    del checkout_payload['cnt']
    
    headers = {
        'Origin': 'https://www.supremenewyork.com',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'https://www.supremenewyork.com/checkout',
        'Accept-Encoding': 'gzip, deflate, br'
    }

    response = session.post('https://www.supremenewyork.com/checkout', data=checkout_payload, headers=headers)
    
    if 'Your order has been submitted' in response.text:
        print('Checkout was successful, check for a confirmation email!')
        return True
    else:
        soup = bs(response.text, 'html.parser')
        error_container = soup.find_all('div', {'class': 'errors'})
        if not error_container:
            print(soup.find('p').text)
        else:
            for error in error_container:
                print('ERROR: ' + error.string)
        return False

def find_product(counter):
    url = base_url + '/shop/all/' + keyword_category[counter] + '/'
    print('Looking in ' + url)
    while not matches[counter]:
        print(datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S'))
        try:
            response1 = search_session.get(url)
        except:
            print('Unable to connect to site...')
            if counter == checkout_qty - 1:
                sys.exit()
            else:
                continue
        
        soup1 = bs(response1.text, 'html.parser')
        h1 = soup1.find_all('h1')
        for header in h1:
            for link in header.find_all('a', {'class': 'name-link'}, href=True):
                model = link.string.lower()
                in_link = True
                for keyword in keyword_model[counter]:
                    if keyword not in model:
                        in_link = False
                        break
                if in_link and keyword_style[counter] == header.parent.find('p').string.lower() and matches[counter] == False:
                    matches[counter] = True
                    if header.parent.find('div', {'class': 'sold_out_tag'}) is None:
                        return add_to_cart(checkout_session, base_url + link['href'], counter)
                    else:
                        print('Sorry, product is sold out!')
                        return False
                        
        if matches[counter] == False:
            print('Could not find item. Trying again...')
            time.sleep(5)

def main(items):
    global eu, country_abbrv, _card
    country_lookup = {
        'United States': 'USA',
        'United Kingdom': 'GB',
        'Austria': 'AT',
        'Belarus': 'BY',
        'Belgium': 'BE',
        'Bulgaria': 'BG',
        'Croatia': 'HR',
        'Czech Republic': 'CZ',
        'Demark': 'DK',
        'Estonia': 'EE',
        'Finland': 'FI',
        'France': 'FR',
        'Germany': 'DE',
        'Greece': 'GR',
        'Hungary': 'HU',
        'Iceland': 'IS',
        'Ireland': 'IE',
        'Italy': 'IT',
        'Lativa': 'LV',
        'Lithuania': 'LT',
        'Luxembourg': 'LU',
        'Monaco': 'MC',
        'Netherlands': 'NL',
        'Northern Ireland': 'NB',
        'Norway': 'NO',
        'Poland': 'PO',
        'Portugal': 'PT',
        'Romania': 'RO',
        'Russia': 'RU',
        'Slovakia': 'SK',
        'Slovenia': 'SI',
        'Spain': 'ES',
        'Sweden': 'SE',
        'Switzerland': 'CH',
        'Turkey': 'TR'
    }

    if shipping_country not in country_lookup:
        sys.exit('Sorry, Supreme doesnt ship to your country')
    else:
        country_abbrv = country_lookup[shipping_country]
        
    if shipping_country is not 'United States':
        eu = True
    else:
        eu = False
        
    if card_type.lower() in ['mastercard', 'master card', 'master']:
        _card = 'master'
    elif card_type.lower() == 'visa':
        _card = 'visa'
    elif card_type.lower() == 'american express':
        _card = 'american_express'
    elif card_type.lower() == 'solo' and eu is True:
        _card = 'solo'
    else:
        sys.exit('You must use a master, visa, solo (EU only) or an american express card')
        
    for i, item in enumerate(items):
        properties = item['properties']
        keyword_category.append(properties[0]['value'].lower())
        keyword_model.append(properties[1]['value'].lower().split(','))
        keyword_style.append(properties[2]['value'].lower())
        sizes.append(properties[3]['value'].lower())
        matches.append(False)
        find_product(i)
    if products_in_cart:
        return checkout(checkout_session)
    return items
    
test_items = [
    {
        'properties': [
            {'attribute': 'category', 'value': 'accessories'},
            {'attribute': 'model', 'value': 'hanes, socks'},
            {'attribute': 'color', 'value': 'white'},
            {'attribute': 'size', 'value': 'n/a'},
        ]
    }
]

print(main(test_items))