def reverseList(list):
    for i in range(int(len(list)/2)) :
        temp = list[i];
        list[i] = list[len(list)-1-i];
        list[len(list)-1-i] = temp
    return list
test = [0,1,2,3,4,5]
x =  reverseList(test)
print(x)