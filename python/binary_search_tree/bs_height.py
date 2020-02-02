class BSTree():

    def __init__(self):
        self.root = None

    def traverse(self, runner, count):
        if( runner.left == None and runner.right == None):
            return count

    def addNode(self, value, runner = root):
        if(self.root == None):
            self.root = BSNode(value)
            return self
        if (runner.left == None and runner.right == None):
            if (value < runner.value ):
                runner.left = BSNode(value)
                return self
            else:
                runner.right = BSNode(value)
                return self
        elif (value < runner.value):
            return addNode(self, value, runner.left)
        else:
            return addNode(self, value, runner.right)
        




class BSNode():
    def __init__(self, value):
        self.value = value
        self.right = None
        self.left = None


tree = BSTree()
tree.addNode(7)
tree.addNode(8)
print(tree.root.value)