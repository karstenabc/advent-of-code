#true if digits never descend
def increasing(value):
    code = [int(x) for x in str(value)]
    current = code[0]
    for i in range(1, len(code)):
        if (code[i] < current):
            return False
        elif (code[i] > current):
            current = code[i]
    return True


#true if a digit appears at least twice
def double(value):
    code = [int(x) for x in str(value)]
    for i in range(1, 10):
        if (code.count(i) >= 2):
           return True 
    return False


#find combinations for range
combinations = 0
for i in range(248345, 746316):
    if (increasing(i) and double(i)):
        combinations += 1

print(combinations)
