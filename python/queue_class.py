# Building a queue from 2 stacks
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, val):
        self.stack.append(val)
        return self

    def pop(self):
        return self.stack.pop()

class Queue:
    def __init__ (self):
        self.In = Stack()
        self.Out = Stack()

    def push(self, val):
        self.In.push(val)
        return self

    def pop(self):
        for i in range(len(self.In.stack)-1):
            self.Out.push(self.In.pop())
        temp = self.In.pop()
        for i in range(len(self.Out.stack)):
            self.In.push(self.Out.pop())
        return temp

    def display(self):
        for i in range(len(self.In.stack)):
            print(self.In.stack[i])
        return self


