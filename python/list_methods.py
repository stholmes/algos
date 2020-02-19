def reverseList(list):
    midPoint = int(len(list)/2)
    for i in range(midPoint) :
        temp = list[i];
        list[i] = list[len(list)-1-i];
        list[len(list)-1-i] = temp
    return list
test = [0,1,2,3,4,5]
# x =  reverseList(test)
# print(x)


def pushFront(list, val):
    list.append(None)
    for i in range(len(list)-1,0,-1):
        list[i] = list[i-1]
    list[0] = val
    return list

print(pushFront(test,22))