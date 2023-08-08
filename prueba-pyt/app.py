#Esto es una prueba del code js pero en python.

numeroRandom = 20

i = 0

while i<1:
    num=int(input('digite el numero: '))

    if num <= numeroRandom:
        if num <= (numeroRandom*(0.30)):
            print('frio')
        elif num <= (numeroRandom*(0.50)):
            print('tibio')
        elif num <= (numeroRandom*(0.70)):
            print('caliente')
        elif num <= (numeroRandom*(0.99)):
            print('demasiado caliente')
        elif num == numeroRandom:
            print('ganaste')
            break
    else:
        if num >= (numeroRandom*(0.30)):
            print('frio')
        elif num >= (numeroRandom*(0.50)):
            print('tibio')
        elif num >= (numeroRandom*(0.70)):
            print('caliente')
        elif num >= (numeroRandom*(0.90)):
            print('demasiado caliente')
        elif num == numeroRandom:
            print('ganaste')
            break