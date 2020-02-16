from stack_class import Stack

def correctParen(str):
    stack = Stack()
    for i in str:
        if i == '{' or i =='(' or i =='[':
            stack.push(i)
            print(i)
        if i == "}" or i == ")" or i =="]":
            if len(stack.In.queue) == 0:
                return f"{str} doesn't contain correct parenthesis."
            temp = stack.pop()
            if i + temp == "}{" or i + temp == "][" or i + temp ==")(":
                continue
            else:
                print('hi')
                return f"{str} doesn't contain correct parenthesis."
    if len(stack.In.queue) == 0:
        return f"{str} does contain correct parenthesis."
    else:
        return f"{str} doesn't contain correct parenthesis."
print(correctParen('()[HELLO{]}'))