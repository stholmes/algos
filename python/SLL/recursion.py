def rprint(value, x=0):
    if (x == value):
        return x
    return print(rprint(value, x + 1))


rprint(10)