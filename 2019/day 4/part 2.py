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


#true if there are two repeated digits
def group(value):
    code = [int(x) for x in str(value)]
    occurances = []
    for i in range(1, 10):
        occurances.append(code.count(i))
        
    for i in range(0, len(occurances)):
        if (occurances[i] == 2):
            indexa = code.index(i+1)
            indexb = code.index(i+1, indexa+1)
            if (indexb - indexa == 1):
                return True
    return False


#find combinations for range
combinations = 0
for i in range(248345, 746316):
    if (increasing(i) and group(i)):
        combinations += 1

    
print(combinations)
