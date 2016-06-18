#!/usr/bin/env python3
import requests
import re
import timeit
from bs4 import BeautifulSoup as bs
from getconf import *

#User input
size = 'Medium'
early_link = 'http://shop-usa.palaceskateboards.com/products/reversible-thinsulate-green-gables-puritan-grey'

start = timeit.default_timer()

session = requests.session()

response = session.get(early_link)
soup = bs(response.text, 'html.parser')

product_id = ''
options = soup.find_all('option')
for option in options:
    if option.getText() == size:
        product_id = option['value']
        continue

payload = {
    'id' : product_id,
    'button' : 'Add to Cart'
}

response1 = session.post('http://shop-usa.palaceskateboards.com/cart/add', data=payload)

response2 = session.get('http://shop-usa.palaceskateboards.com/cart')
soup1 = bs(response1.text, 'html.parser')

print (soup1)

stop = timeit.default_timer()
print (stop - start)
