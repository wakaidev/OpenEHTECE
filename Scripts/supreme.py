from multiprocessing.dummy import Pool as ThreadPool
from bs4 import BeautifulSoup as bs
import requests
import sys
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
		model = input('Enter model keywords seperated by commas: ').strip()
		style = input('Enter style (color) keyword: ').strip()
		
		if category == 'tops/sweaters':
			category = 'tops_sweaters'
		keyword_category.append(category)
		keyword_model.append(model.split(','))
		keyword_style.append(style)
		
		link_or_keyword.append(False)
		early_links.append(False)
	
	if input_counter == 0:
		print('\n' + 'Valid Clothing/Accessory Sizes: Small, Medium, Large, XLarge, OS')
		print('If there is only one size, enter OS', '\n')
	
	size = input('Size: ').strip()
	sizes.append(size)

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
	
	response = session.get(base_url + product_url)
	
	h1 = soup.find('h1', {'itemprop': 'name'})
	p = soup.find('p', {'itemprop': 'model'})
	
	if h1 is not None and p is not None:
		model = h1.string
		style = p.string
		
		match = []
		for keyword in keyword_model[counter]:
			if keyword.lower().strip() in model.lower().strip():
				match.append(1)
			else:
				match.append(0)
		
		if 0 not in match:
			match = []
			for keyword in keyword_style[counter]:
				if keyword.lower().strip() in style.lower().strip():
					match.append(1)
				else:
					match.append(0)
			if 0 not in match:
				print('FOUND: ' + model + ' at ' + base_url + product_url)
				return {
					'url': base_url + product_url,
					'soup': soup
				}
			else:
				return {
					'url': 'null',
					'soup': 'null'
				}
		else:
			return {
				'url': 'null',
				'soup': 'null'
			}
	else:
		return {
			'url': 'null',
			'soup': 'null'
		}


def add_to_cart(session, soup, url):
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
	
	# find size
	sold_out = soup.find('fieldset', {'id': 'add-remove-buttons'}).find('b')
	if sold_out is not None:
		print('Sorry, product is sold out!')
		if counter == checkout_qty - 1:
			sys.exit(0)
		else:
			return
	else:
		if sizes[counter].upper() == 'OS':
			size_value = form.find('input', {'id': 'size'})['value']
		else:
			try:
				size_value = form.find('option', string=sizes[counter].title())['value']
			except:
				print('Sorry, {} is sold out!'.format(sizes[counter]))
				if counter == checkout_qty - 1:
					sys.exit(0)
				else:
					return
	
	if form is not None:
		payload = {
			'utf8': '✓',
			'authenticity_token': form.find('input', {'name': 'authenticity_token'})['value'],
			'size': size_value,
			'commit': 'add to cart'
		}
		if eu:
			payload['commit'] = 'add to basket'
			
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
		'credit_card[year]': card_exp_year,
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
		checkout_payload['order[tel]'] = phone_number
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
		links1 = soup1.find_all('a', href=True)
		
		basura = ['http://www.supremenewyork.com/shop/faq', 'https://www.supremenewyork.com/checkout',
		          'http://www.supremenewyork.com/shop']
		basura += ['http://www.supremenewyork.com/shop/terms', 'http://www.supremenewyork.com/shop/sizing',
		           'http://www.supremenewyork.com/shop/all', 'http://www.supremenewyork.com/shop/shipping']
		basura += ['/shop/all', '/shop/new', '/shop/cart', '/shop/terms']
		
		links_by_keyword1 = []
		for link in links1:
			for keyword in keyword_category[counter]:
				product_link = link['href']
				if keyword in product_link and product_link not in basura:
					if product_link not in links_by_keyword1 and product_link not in basura:
						if '/shop/all/' not in product_link:
							links_by_keyword1.append(product_link)
						else:
							basura.append(product_link)
		keyword_link_qty = len(links_by_keyword1)
		pool1 = ThreadPool(keyword_link_qty)
		product_dict = pool1.map(product_page, links_by_keyword1)
		
		for obj in product_dict:
			if obj['url'] is not 'null':
				add_to_cart(checkout_session, obj['soup'], obj['url'])
				break
checkout(checkout_session)

tock()  # runtime
