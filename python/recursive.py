def fibanocci(num):
    if(num == 0 ):
        return 0
    if(num == 1):
        return 1
    return fibanocci(num -1 )+ fibanocci(num-2)

print(fibanocci(7))