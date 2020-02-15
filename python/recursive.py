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

def pallindrome(str, i = 0):
    if i == len(str)/2 or i < len(str)/2 and str[i] == str[len(str)-1-i]:
        return f'{str} is a pallindrome'

    if str[i] == str[len(str)-1-i]:
        return pallindrome(str, i = i + 1)
    else:
        return f'{str} is not a pallindrome'

