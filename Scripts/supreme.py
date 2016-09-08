from multiprocessing.dummy import Pool as ThreadPool
from bs4 import BeautifulSoup as bs
import requests
import sys
import json
from getconf import *
from atclibs import *

# Constants
base_url = 'http://www.supremenewyork.com'

# Inputs
link_or_keyword = []  # True: early link, False: keyword
early_links = []
keyword_category = []
keyword_model = []
keyword_style = []
sizes = []
matches = []

keyword = True
checkout_qty = int(input('How many products would you like to checkout? '))

for input_counter, product in enumerate(range(checkout_qty)):
    use_early_link = input('\n' + 'Do you have an early link for product ' + str(input_counter + 1) + '? [y/n] ')
    if use_early_link.lower() in ['y', 'yes']:
        link = input('Enter the link: ').strip()
        early_links.append(link)
        link_or_keyword.append(True)
        
        keyword_category.append(False)
        keyword_model.append(False)
        keyword_style.append(False)
    else:
        if keyword:
            print('\n' + 'Example of a keyword search: ')
            print('Category: accessories')
            print('Model: hanes, socks')
            print('Style: white', '\n')
            keyword = False
        
        category = input('Enter category keyword: ').strip()
        model = input('Enter model keywords seperated by commas (actual model must contain all keywords): ').strip()
        style = input('Enter style (color) keyword: ').strip()
        
        if category == 'tops/sweaters':
            category = 'tops_sweaters'
        keyword_category.append(category)
        keyword_model.append(model.split(','))
        keyword_style.append(style)
        
        link_or_keyword.append(False)
        early_links.append(False)
    
    if input_counter == 0:
        print('\n' + 'Valid Clothing/Accessory Sizes: Small, Medium, Large, XLarge, N/A')
        print('If there is only one size, enter N/A', '\n')
    
    size = input('Size: ').strip()
    sizes.append(size)
    matches.append(False)

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
if shipping_country is not 'United States':
    eu = True
else:
    eu = False
    
if card_type.lower() in ['mastercard', 'master card', 'master']:
    card_ = 'master'
elif card_type.lower() == 'visa':
    card_ = 'visa'
elif card_type.lower() == 'american express':
    card_ = 'american_express'
elif card_type.lower() == 'solo' and eu is True:
        card_ = 'solo'
else:
    sys.exit('You must use a master, visa, solo (EU only) or an american express card')


# Functions
def product_page(product_url):
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/52.0.2743.116 Safari/537.36',
        'X-XHR-Referer': 'http://www.supremenewyork.com/shop/all',
        'Referer': 'http://www.supremenewyork.com/shop/all/bags',
        'Accept': 'text/html, application/xhtml+xml, application/xml',
        'Accept-Encoding': 'gzip, deflate, sdch',
        'Accept-Language': 'en-US,en;q=0.8,da;q=0.6',
        'DNT': '1'
    })
    
    response = session.get(base_url + product_url + '.json')
    response_json = json.loads(response.text)

    for style in response_json['styles']:
        if keyword_style[counter] in style['name'].lower():
            for size in style['sizes']:
                if sizes[counter] in size['name'].lower() and matches[counter] == False:
                    matches[counter] = True
                    if size['stock_level'] != 0:
                        return {
			    'url': base_url + product_url,
                            'size_id': size['id']
			}
                    else:
                        print('Product out of stock!')


def add_to_cart(session, url, size_id):
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
        print('Added {} to cart!'.format(product_name))


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
        'order[billing_country]': shipping_country_abbrv,
        'same_as_billing_address': '1',
        'store_credit_id': '',
        'credit_card[type]': card_,
        'credit_card[cnb]': format_card(card_number),
        'credit_card[month]': card_exp_month,
        'credit_card[year]': year,
        'credit_card[vval]': card_cvv,
        'order[terms]': '1',
        'hpcvv': '',
        'cnt': '1'
    }
    
    checkout_payload = payload.copy()
    checkout_payload['order[tel]'] = format_phone(phone_number)

    if eu:
        payload['order[tel]'] = phone_number
        payload['order[billing_address_2]'] = shipping_address_2
        payload['order[billing_address_3]'] = shipping_apt_suite
        del payload['store_credit_id']
        del payload['order[billing_state]']
    
    session.get('https://www.supremenewyork.com/checkout.js', data=payload, headers=headers)
    
    if eu:
        
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
    else:
        soup = bs(response.text, 'html.parser')
        error_container = soup.find_all('div', {'class': 'errors'})
        if not error_container:
            print(soup.find('p').text)
        else:
            for error in error_container:
                print('ERROR: ' + error.string)


# Main
tick()

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

for counter, i in enumerate(link_or_keyword):
    if i:  # early_link
        try:
            response1 = search_session.get(early_links[counter])
            soup = bs(response1.text, 'html.parser')
        except:
            print('Unable to connect to site...')
            if counter == checkout_qty - 1:
                sys.exit()
            else:
                continue
        add_to_cart(checkout_session, soup, early_links[counter])
    else:  # keyword search
        try:
            url = base_url + '/shop/all/' + keyword_category[counter] + '/'
            response1 = search_session.get(url)
        except:
            print('Unable to connect to site...')
            if counter == checkout_qty - 1:
                sys.exit()
            else:
                continue
        
        soup1 = bs(response1.text, 'html.parser')
        links1 = soup1.find_all('a', {'class': 'name-link'})
        
        links_by_keyword1 = []
        for link in links1:
            product_link = link['href']
            if product_link not in links_by_keyword1:
                in_link = True
                for model in keyword_model[counter]:
                    if not model in link.getText().lower():
                        in_link = False
                if in_link:
                    links_by_keyword1.append(product_link)

        keyword_link_qty = len(links_by_keyword1)
        
        pool1 = ThreadPool(keyword_link_qty)
        product_dict = pool1.map(product_page, links_by_keyword1)
        
        for obj in product_dict:
            if obj is not None:
                add_to_cart(checkout_session, obj['url'], obj['size_id'])
                break
        
checkout(checkout_session)

tock()  # runtime
