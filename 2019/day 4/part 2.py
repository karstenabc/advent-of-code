#true if digits never descend
def increasing(code):
    current = code[0]
    for i in range(1, len(code)):
        if (code[i] < current):
            return False
        elif (code[i] > current):
            current = code[i]
    return True


#true if there are two repeated digits
def group(code):
    occurances = []
    for i in range(1, 10):
        occurances.append(code.count(i))
        
    for i in range(0, len(occurances)):
        if (occurances[i] == 2):
            return True
    return False


#find combinations for range
combinations = 0
for i in range(248345, 746316):
    code = [int(x) for x in str(i)]
    if (increasing(code) and group(code)):
        combinations += 1

    
print(combinations)
