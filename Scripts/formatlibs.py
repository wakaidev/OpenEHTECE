import timeit

def format_phone(n):
	return '({}) {}-{}'.format(n[:3], n[3:6], n[6:])


def format_card(n):
	return '{} {} {} {}'.format(n[:4], n[4:8], n[8:12], n[12:])

def tick():
    global tick
    tick = timeit.default_timer()
    return tick

def tock():
    tock = timeit.default_timer() - tick
    print(tock)
    return tock
