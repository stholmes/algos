class SLList:
    def __init__(self):
        self.head = None
       

    def push(self, value):
        if (self.head == None):
            self.head = SLNode(value)
            return self
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        runner.next = SLNode(value)
        return self

    def addToFront(self, value):
        temp = self.head
        self.head = SLNode(value)
        self.head.next = temp
        return self

    def print(self):
        if (self.head == None):
            return 'No values'
        runner = self.head
        while (runner.next != None):
            print(runner.value)
            runner = runner.next
        print(runner.value)
        return self

    def pop(self):
        if (self.head == None):
            return 'No nodes to remove'
        runner = self.head
        while (runner.next.next != None):
            runner = runner.next
        temp = runner.next
        runner.next = None
        return temp

    def removeFront(self):
        if (self.head == None):
            return 'No nodes to remove'
        temp = self.head
        self.head = temp.next
        return temp

    def add(self, val):
        if self.head == None:
            return self.addToFront(self, val)
        start = self.head.next
        end = self.head
        while start.value < val:
            start = start.next
            end = end.next
        end.next = SLNode(val)
        end.next.next = start
        return self

    def length(self):
        counter = 0
        runner = self.head
        while(runner.next != None):
            counter += 1
            runner = runner.next
        return counter

    def findValue(self, val):
        counter = 0;
        runner = self.head
        while(runner.next != None):
            if(runner.value == val):
                break
            counter += 1
            runner = runner.next
        return counter

class SLNode:
    def __init__(self, value):
        self.value = value
        self.next = None


test = SLList()
test.push(7).push(8)
test.addToFront(6).addToFront(5).push(10)

test.add(9)

print(test.findValue(5))