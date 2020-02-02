def max_value(cake_tuples, capacity):
    value = 0
    max_cake = []
    # if the bag can hold 0 lbs, then max value is 0
    if (capacity == 0 or len(cake_tuples) == 0):
        return 0
    # if the cake has no weight but a value
    for cake in cake_tuples:
        if (cake[0] == 0 and cake[1] != 0):
            return "infinite value"


print(max_value([], 2))
#maximize the number of cakes