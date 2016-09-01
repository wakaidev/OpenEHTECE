import timeit
import sys
import time
import requests
import re
from multiprocessing.dummy import Pool as ThreadPool

from bs4 import BeautifulSoup as bs
from getconf import *

# TO DO: early link capability

# Constants
base_url = 'http://www.supremenewyork.com'
requests.packages.urllib3.disable_warnings()
# Inputs
keywords_category = ['bags']  # Demo stuff, feel free to change
keywords_model = ['Reflective', 'Repeat', 'Backpack']
keywords_style = ['Black']

use_early_link = True

early_link = ''


# Functions
def product_page(url):
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

	response = session.get(base_url + url)
	soup = bs(response.text, 'html.parser')

	h1 = soup.find('h1', {'itemprop': 'name'})
	p = soup.find('p', {'itemprop': 'model'})

	match = []

	name = 'null'
	style = 'null'

	if h1 is not None and p is not None:
		name = h1.string
		style = p.string
		# print(name + ': ' + style)

		for keyword in keywords_model:
			if keyword in name:
				match.append(1)
			else:
				match.append(0)

		# add to cart
		if 0 not in match:
			for keyword in keywords_style:
				if keyword in style:
					match.append(1)
				else:
					match.append(0)
			if 0 not in match:
				print('FOUND: ' + name + ' at ' + base_url + url)
				form = soup.find('form', {'action': re.compile('(?<=/shop/)(.*)(?=/add)')})
				csrf_token = soup.find('meta', {'name': 'csrf-token'})['content']
				size = form.find('input', {'name': 'size'})['value']

				if form is not None:
					payload = {
						'utf8': '✓',
						'authenticity_token': form.find('input', {'name': 'authenticity_token'})['value'],
						'size': size,
						'commit': 'add to cart'
					}
					headers = {
						'Accept': '*/*;q=0.5, text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
						'Origin': 'http://www.supremenewyork.com',
						'X-Requested-With': 'XMLHttpRequest',
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						'Referer': base_url + url,
						'X-XHR-Referer': None,
						'X-CSRF-Token': csrf_token,
						'Accept-Encoding': 'gzip, deflate'
					}

					response1 = session.post(base_url + form['action'], data=payload, headers=headers)
					print(response1)
					print(session)
					print('Added to cart!')
					return session


def format_phone(n):
	return '({}) {}-{}'.format(n[:3], n[3:6], n[6:])


def format_card(n):
	return '{} {} {} {}'.format(n[:4], n[4:8], n[8:12], n[12:])


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
		'credit_card[type]': card_type,
		'credit_card[cnb]': format_card(card_number),
		'credit_card[month]': card_exp_month,
		'credit_card[year]': card_exp_year,
		'credit_card[vval]': card_cvv,
		'order[terms]': '1',
		'hpcvv': '',
		'cnt': '2'
	}
	response = session.get('https://www.supremenewyork.com/checkout.js', data=payload, headers=headers)

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
		'order[billing_state]': shipping_state_abbrv,
		'order[billing_country]': shipping_country_abbrv,
		'same_as_billing_address': '1',
		'store_credit_id': '',
		'credit_card[type]': card_type,
		'credit_card[cnb]': format_card(card_number),
		'credit_card[month]': card_exp_month,
		'credit_card[year]': card_exp_year,
		'credit_card[vval]': card_cvv,
		'order[terms]': '1',
		'hpcvv': ''
	}
	headers = {
		'Origin': 'https://www.supremenewyork.com',
		'Content-Type': 'application/x-www-form-urlencoded',
		'Referer': 'https://www.supremenewyork.com/checkout',
		'Accept-Encoding': 'gzip, deflate, br'
	}

	response = session.post('https://www.supremenewyork.com/checkout', data=payload, headers=headers)

	if 'Your order has been submitted' in response.text:
		print('Checkout was successful!')
	else:
		soup = bs(response.text, 'lxml')
		print(soup.find('p').text)

# Main
start = timeit.default_timer()

session1 = requests.Session()
session1.headers.update({
	'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) '
	              'Chrome/52.0.2743.116 Safari/537.36',
	'Upgrade-Insecure-Requests': '1',
	'DNT': '1',
	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
	'Accept-Encoding': 'gzip, deflate, sdch',
	'Accept-Language': 'en-US,en;q=0.8,da;q=0.6'
})

try:
	url = base_url + '/shop/all/' + keywords_category[0] + '/'
	print(url)
	response1 = session1.get(url)
except:
	sys.exit('Unable to connect to site...')

soup1 = bs(response1.text, 'html.parser')
links1 = soup1.find_all('a', href=True)
links_by_keyword1 = []
for link in links1:
	for keyword in keywords_category:
		product_link = link['href']
		if keyword in product_link:
			if product_link not in links_by_keyword1:
				links_by_keyword1.append(link['href'])

pool1 = ThreadPool(len(links_by_keyword1))

nosession = True
while nosession:
	print('Finding matching products...')
	result1 = pool1.map(product_page, links_by_keyword1)
	for session in result1:
		if not session is None:
			nosession = False
			checkout(session)
			break

stop = timeit.default_timer()
print(stop - start)  # runtime