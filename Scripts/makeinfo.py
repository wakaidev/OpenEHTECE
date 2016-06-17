#!/usr/bin/env python3
import sys
import json

"""An interactive script for generating userinfo.json"""
if sys.version_info[0] == 2:
    input = raw_input

configuration = {}

print("You may simply press <enter> without inputting anything to any of")
print("these questions, but this may produce strange errors.")

configuration["first_name"] = input("Please enter your first name: ")
configuration["last_name"] = input("Please enter your last name: ")
configuration["phone_number"] = input("Please enter youf phone number: ")
configuration["email"] = input("Please enter your email address: ")
configuration["shipping_address_1"] = input("Please enter line 1 of the address you would like it shipped to: ")
configuration["shipping_address_2"] = input("Please enter line 2 of the address you would like it shipped to: ")
configuration["shipping_apt_suite"] = input("Please enter the apartment suite you would like it shipped to, if applicable: ")
configuration["shipping_city"] = input("Please enter the city you would like it shipped to: ")
configuration["shipping_state"] = input("Please enter the state you would like it shipped to: ")
configuration["shipping_country"] = input("Please enter the country you would like it shipped to: ")
configuration["shipping_zip"] = input("Please enter the zip code of the place you would like it shipped to: ")
print("")
configuration["card_type"] = input("What type of card do you have (Visa, MasterCard, Amex...)? ")
print("")
print("It is recommended that, if you are testing, you input a real card number but a fake CVV.  This")
print("way, checkout will proceed as normal so you can see what will occur, but nothing will be")
print("charged to your account.")
print("")
configuration["card_number"] = input("Please enter your credit card number: ")
configuration["card_cvv"] = input("Please enter the CVV for that credit card: ")
configuration["card_exp_year"] = input("What year does this credit card expire? ")
configuration["card_exp_month"] = input("What month does this credit card expire? ")

with open("userinfo.json", "w") as conffile:
    json.dump(configuration, conffile, sort_keys=True, indent=4)
