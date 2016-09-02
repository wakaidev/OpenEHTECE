#!/usr/bin/env python3
import requests
import re
import timeit
import json
from multiprocessing.dummy import Pool as ThreadPool
from bs4 import BeautifulSoup as bs
from getconf import *
<<<<<<< HEAD
from atclibs import *
=======
>>>>>>> 82879ef4564c7047de896b1750f29ea6de78b596

"""
NOTE:
billAddressType changes from 'different' to 'new' possibly depending on if shipping/bill address is the same
cant find hbg, bb_device_id, requestKey, despite it being on 'https://www.footlocker.com/checkout/ in browser'

"""
<<<<<<< HEAD
base_url = 'http://www.footlocker.com'
=======
>>>>>>> 82879ef4564c7047de896b1750f29ea6de78b596

# User input
use_early_link = True
early_link = "http://www.footlocker.com/product/model:175563/sku:11881010/nike-roshe-one-mens/black/grey/?cm="
use_keyword = False
<<<<<<< HEAD
size = "8"
size = footsites_parse_size(size)

def add_to_cart():
    soup = bs(response.text, 'html.parser')
    referer = response.url

    sku = soup.find('input', {'id': 'pdp_selectedSKU'})['value']
    model_num = soup.find('input', {'id': 'pdp_model'})['value']
    request_key = soup.find('input', {'id': 'requestKey'})['value']

    payload = {
        'BV_TrackingTag_QA_Display_Sort': '',
        'BV_TrackingTag_Review_Display_Sort': 'http: // footlocker.ugc.bazaarvoice.com / 8001 /' + sku + '/ reviews.djs?format=embeddedhtml',
        'coreMetricsCategory': 'blank',
        'fulfillmentType': 'SHIP_TO_HOME',
        'hasXYPromo': 'false',
        'inlineAddToCart': '0,1',
        'qty': '1',
        'rdo_deliveryMethod': 'shiptohome',
        'requestKey': request_key,
        'size': size,
        'sku': sku,
        'storeCostOfGoods': '0.00',
        'storeNumber': '00000',
        'the_model_nbr': model_num
    }
    headers = {
        'Accept': '*/*',
        'Origin': base_url,
        'X-Requested-With': 'XMLHttpRequest',
        'Referer': referer,
        'Accept-Encoding': 'gzip, deflate',
    }

    response = session.post(base_url + '/catalog/miniAddToCart.cfm?secure=0&', headers=headers, data=payload)


def checkout():
    # response = session.get('http://www.footlocker.com/shoppingcart/default.cfm?sku=')

    payload = {
        'BV_TrackingTag_QA_Display_Sort': '',
        'BV_TrackingTag_Review_Display_Sort': 'http: // footlocker.ugc.bazaarvoice.com / 8001 /' + sku + '/ reviews.djs?format = embeddedhtml',
        'coreMetricsCategory': 'blank',
        'fulfillmentType': 'SHIP_TO_HOME',
        'hasXYPromo': 'false',
        'inlineAddToCart': '1',
        'qty': '1',
        'rdo_deliveryMethod': 'shiptohome',
        'requestKey': request_key,
        'size': size,
        'sku': sku,
        'storeCostOfGoods': '0.00',
        'storeNumber': '00000',
        'the_model_nbr': model_num
    }

    response = session.post(
        'http://www.footlocker.com/catalog/miniAddToCart.cfm?secure=0&',
        data=payload)

    response = session.get('https://www.footlocker.com/checkout/')

    soup = bs(response.text, 'html.parser')

    #
    # device_id = soup.find('input', {'id': 'bb_device_id'}).get('value') #uri-checkout
    #
    # hbg = soup.find('input', {'id': 'hbg'}).get('value')
    #
    # TID = soup.find('input', {'id': 'emailVerificationForm'}).get('action')

   payload = {
        'CPCOrSourceCode':'',
        'CardCCV':card_cvv,
        'CardExpireDateMM':card_exp_month,
        'CardExpireDateYY':card_exp_year,
        'CardNumber':card_number,
        'addressBookEnabled': 'true',
        'bb_device_id': device_id,
        'bdday': '01',
        'bdmonth': '01',
        'bdyear': '1900',
        'billAPOFPOCountry': 'US',
        'billAPOFPOPostalCode':'',
        'billAPOFPORegion':'',
        'billAPOFPOState':'',
        'billAddress1': shipping_address_1,
        'billAddress2':shipping_address_2,
        'billAddressInputType': 'single',
        'billAddressType': 'new',
        'billCity': shipping_city,
        'billConfirmEmail': email,
        'billCountry': 'US',
        'billEmailAddress':email,
        'billFirstName': first_name,
        'billHomePhone': phone_number,
        'billLastName': last_name,
        'billMeLaterStage': 'NotInitialized',
        'billMobilePhone':'',
        'billMyAddressBookIndex': '-1',
        'billPaneShipToBillingAddress': 'true',
        'billPostalCode': shipping_zip,
        'billProvince':'',
        'billState': shipping_state,
        'bmlConsent': 'Yes',
        'fieldCount': '1',
        'giftCardCode_1':'',
        'giftCardPin_1':'',
        'hbg': hbg,
        'loginHeaderEmailAddress': email,
        'loginHeaderPassword': '',
        'loginPaneConfirmNewEmailAddress':'',
        'loginPaneEmailAddress':'',
        'loginPaneNewEmailAddress':'',
        'loginPanePassword':'',
        'orderReviewPaneBillSubscribeEmail': 'true',
        'payMethodPaneCVV':'',
        'payMethodPaneCardNumber':'',
        'payMethodPaneCardType':'',
        'payMethodPaneConfirmCardNumber':'',
        'payMethodPaneExpireMonth':'',
        'payMethodPaneExpireYear':'',
        'payMethodPaneStoredCCCVV':'',
        'payMethodPaneStoredCCExpireMonth':'',
        'payMethodPaneStoredCCExpireYear':'',
        'payMethodPaneStoredType':'',
        'promoType':'',
        'requestKey': request_key,
        'shipAPOFPOCountry': 'US',
        'shipAPOFPOPostalCode':'',
        'shipAPOFPORegion':'',
        'shipAPOFPOState':'',
        'shipAddress1':'',
        'shipAddress2':'',
        'shipAddressInputType': 'single',
        'shipAddressType': 'different',
        'shipCity':'',
        'shipCountry': 'US',
        'shipFirstName':'',
        'shipHomePhone':'',
        'shipLastName':'',
        'shipMethodCodeS2S':'',
        'shipMyAddressBookIndex': '-1',
        'shipPostalCode':'',
        'shipProvince':'',
        'shipState':'',
        'shipToStore': 'false',
        'ssn': '1000',
        'storePickupInputPostalCode':'',
        'verifiedCheckoutData': {
            'maxVisitedPane': 'billAddressPane',
             'updateBillingForBML': 'false',
            'billMyAddressBookIndex': '-1',
             'addressNeedsVerification': 'true',
             'billFirstName': first_name,
            'billLastName': last_name,
             'billAddress1': shipping_address_1,
             'billAddress2': shipping_address_1,
             'billCity': shipping_city,
             'billState': shipping_state,
            'billProvince': '',
             'billPostalCode': '',
             'billHomePhone': '',
             'billMobilePhone': '',
            'billCountry': 'US',
             'billEmailAddress': email,
             'billConfirmEmail': email,
            'billAddrIsPhysical': 'true',
             'billSubscribePhone': 'false',
             'billAbbreviatedAddress': 'false',
            'shipUpdateDefaultAddress': 'false',
             'VIPNumber': '',
            'accountBillAddress': {'billMyAddressBookIndex': '-1'}, 'selectedBillAddress': {},
            'billMyAddressBook': []
            }
        }
    # response = session.post(url, data=payload, headers=headers)
=======


def checkout():
	# response = session.get('http://www.footlocker.com/shoppingcart/default.cfm?sku=')

	payload = {
		'BV_TrackingTag_QA_Display_Sort': '',
		'BV_TrackingTag_Review_Display_Sort': 'http: // footlocker.ugc.bazaarvoice.com / 8001 /' + sku + '/ reviews.djs?format = embeddedhtml',
		'coreMetricsCategory': 'blank',
		'fulfillmentType': 'SHIP_TO_HOME',
		'hasXYPromo': 'false',
		'inlineAddToCart': '1',
		'qty': '1',
		'rdo_deliveryMethod': 'shiptohome',
		'requestKey': request_key,
		'size': size,
		'sku': sku,
		'storeCostOfGoods': '0.00',
		'storeNumber': '00000',
		'the_model_nbr': model_num
	}

	response = session.post(
		'http://www.footlocker.com/catalog/miniAddToCart.cfm?secure=0&',
		data=payload)

	response = session.get('https://www.footlocker.com/checkout/')

	soup = bs(response.text, 'html.parser')

	#
	# device_id = soup.find('input', {'id': 'bb_device_id'}).get('value') #uri-checkout
	#
	# hbg = soup.find('input', {'id': 'hbg'}).get('value')
	#
	# TID = soup.find('input', {'id': 'emailVerificationForm'}).get('action')

	payload = {
	'CPCOrSourceCode':'',
	'CardCCV':card_cvv,
	'CardExpireDateMM':card_exp_month,
	'CardExpireDateYY':card_exp_year,
	'CardNumber':card_number,
	'addressBookEnabled': 'true',
	'bb_device_id': device_id,
	'bdday': '01',
	'bdmonth': '01',
	'bdyear': '1900',
	'billAPOFPOCountry': 'US',
	'billAPOFPOPostalCode':'',
	'billAPOFPORegion':'',
	'billAPOFPOState':'',
	'billAddress1': shipping_address_1,
	'billAddress2':shipping_address_2,
	'billAddressInputType': 'single',
	'billAddressType': 'new',
	'billCity': shipping_city,
	'billConfirmEmail': email,
	'billCountry': 'US',
	'billEmailAddress':email,
	'billFirstName': first_name,
	'billHomePhone': phone_number,
	'billLastName': last_name,
	'billMeLaterStage': 'NotInitialized',
	'billMobilePhone':'',
	'billMyAddressBookIndex': '-1',
	'billPaneShipToBillingAddress': 'true',
	'billPostalCode': shipping_zip,
	'billProvince':'',
	'billState': shipping_state,
	'bmlConsent': 'Yes',
	'fieldCount': '1',
	'giftCardCode_1':'',
	'giftCardPin_1':'',
	'hbg': hbg,
	'loginHeaderEmailAddress': email,
	'loginHeaderPassword': '',
	'loginPaneConfirmNewEmailAddress':'',
	'loginPaneEmailAddress':'',
	'loginPaneNewEmailAddress':'',
	'loginPanePassword':'',
	'orderReviewPaneBillSubscribeEmail': 'true',
	'payMethodPaneCVV':'',
	'payMethodPaneCardNumber':'',
	'payMethodPaneCardType':'',
	'payMethodPaneConfirmCardNumber':'',
	'payMethodPaneExpireMonth':'',
	'payMethodPaneExpireYear':'',
	'payMethodPaneStoredCCCVV':'',
	'payMethodPaneStoredCCExpireMonth':'',
	'payMethodPaneStoredCCExpireYear':'',
	'payMethodPaneStoredType':'',
	'promoType':'',
	'requestKey': request_key,
	'shipAPOFPOCountry': 'US',
	'shipAPOFPOPostalCode':'',
	'shipAPOFPORegion':'',
	'shipAPOFPOState':'',
	'shipAddress1':'',
	'shipAddress2':'',
	'shipAddressInputType': 'single',
	'shipAddressType': 'different',
	'shipCity':'',
	'shipCountry': 'US',
	'shipFirstName':'',
	'shipHomePhone':'',
	'shipLastName':'',
	'shipMethodCodeS2S':'',
	'shipMyAddressBookIndex': '-1',
	'shipPostalCode':'',
	'shipProvince':'',
	'shipState':'',
	'shipToStore': 'false',
	'ssn': '1000',
	'storePickupInputPostalCode':'',
	'verifiedCheckoutData': {"maxVisitedPane": "billAddressPane", "updateBillingForBML": 'false',
		"billMyAddressBookIndex": "-1", "addressNeedsVerification": 'true', "billFirstName": first_name,
		"billLastName": last_name, "billAddress1": shipping_address_1, "billAddress2": shipping_address_1, "billCity": shipping_city, "billState": shipping_state,
		"billProvince": "", "billPostalCode": "", "billHomePhone": "", "billMobilePhone": "",
		"billCountry": "US", "billEmailAddress": email, "billConfirmEmail": email,
		"billAddrIsPhysical": 'true', "billSubscribePhone": 'false', "billAbbreviatedAddress": 'false',
		"shipUpdateDefaultAddress": 'false', "VIPNumber": "",
		"accountBillAddress": {"billMyAddressBookIndex": -1}, "selectedBillAddress": {},
		"billMyAddressBook": []}
	}
>>>>>>> 82879ef4564c7047de896b1750f29ea6de78b596


# Main

<<<<<<< HEAD
tick()

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/52.0.2743.116 Safari/537.36',
    'DNT': '1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en-US,en;q=0.8,da;q=0.6',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
})

if use_early_link:
    response = session.get(early_link)
    add_to_cart()
    # checkout()
else:
    response = session.get(base_url + '/product/sku:{}/'.format(product_id))
    add_to_cart()
    # checkout()

tock()
=======
start = timeit.default_timer()

session = requests.Session()

if use_early_link:
	response = session.get(early_link)
	soup = bs(response.text, 'html.parser')

	if size[-1] is not "5":
		size = '0' + size + '.0'
	else:
		size = '0' + size

	sku = soup.find('input', {'id': 'pdp_selectedSKU'}).get('value')

	model_num = soup.find('input', {'id': 'pdp_model'}).get('value')

	request_key = soup.find('input', {'id': 'requestKey'}).get('value')

	response = session.get('http://www.footlocker.com/sdd/eligibility?action=ProductZipCode&sku=' + sku + '&size=' + size)

	checkout()

stop = timeit.default_timer()
print(stop - start)
>>>>>>> 82879ef4564c7047de896b1750f29ea6de78b596
