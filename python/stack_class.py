
class Queue:
    def __init__(self):
        self.queue = [];

    def push(self, val):
        self.queue.append(val)
        return self

    def popFront(self):
        temp = self.queue[0]
        for i in range(len(self.queue)-1):
            self.queue[i] = self.queue[i+1]
        self.queue.pop();
        return temp

    def display(self):
        for i in range(len(self.queue)):
            print(self.queue[i])
        return self

class Stack:
    def __init__(self):
        self.In = Queue()
        self.Out=Queue()
    
    def push(self, val):
        self.In.push(val)
        return self

    def display(self):
        self.In.display()
        return self

    def pop(self):
        for i in range(len(self.In.queue)-1):
            self.Out.push(self.In.popFront())
        temp = self.In.popFront()
        for i in range(len(self.Out.queue)):
            self.In.push(self.Out.popFront())
        return temp

stack = Stack()

stack.push(0).push(1).push(2)
print(stack.pop())

