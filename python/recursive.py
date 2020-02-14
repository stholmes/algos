def fibanocci(num):
    if(num == 0 ):
        return 0
    if(num == 1):
        return 1
    return fibanocci(num -1 )+ fibanocci(num-2)

def factorial(num):
    if(num == 0):
        return 0
    if(num == 1):
        return 1
    return num * factorial(num-1)

print(factorial(10))