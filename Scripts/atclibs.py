import timeit

def format_phone(n):
	return '({}) {}-{}'.format(n[:3], n[3:6], n[6:])

<<<<<<< HEAD
=======

>>>>>>> 82879ef4564c7047de896b1750f29ea6de78b596
def format_card(n):
	return '{} {} {} {}'.format(n[:4], n[4:8], n[8:12], n[12:])

def tick():
    global tick
    tick = timeit.default_timer()
    return tick

def tock():
    tock = timeit.default_timer()
    print(tock - tick)
    return tock
<<<<<<< HEAD

def footsites_parse_size(size):
    size_ = size

    if size[-2:] != ".5":
        size_ = size + '.0'
        
    if float(size) < 10:
        size_ = '0' + size
        
    return (size_)
=======
>>>>>>> 82879ef4564c7047de896b1750f29ea6de78b596
