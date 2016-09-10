import requests
import time
from bs4 import BeautifulSoup as bs

session = requests.session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) '
              'Chrome/52.0.2743.116 Safari/537.36',
    'Upgrade-Insecure-Requests': '1',
    'DNT': '1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en-US,en;q=0.8,da;q=0.6'
})

i = 504634236
while True:
    response = session.get('http://www.barneys.com/search?q=' + str(i))
    soup = bs(response.text, "html.parser")
    no_result = soup.find('div', {'class': 'noSearchResult'})
    if no_result is None:
        link = soup.find('a', {'class': 'name-link'})
        print(link['href'])
    else:
        print(str(i) + ' was not a valid link')
    time.sleep(.1)
    i = i + 1
    
