# read opcode file
file = open("input.txt", "r")
data = file.read().split(',')
data = [int(i) for i in data]


# compute previous state
def prevGravityState(codes):
    for i in range(0, len(codes), 4):
        code = codes[i]

        if code == 1 or code == 2:
            # get values at indexes following code
            a = codes[codes[i + 1]]
            b = codes[codes[i + 2]]
            out = codes[i + 3]

            # overwrite out index with result
            if code == 1:
                codes[out] = a + b
            if code == 2:
                codes[out] = a * b

        # halt if code is 99 or unknown
        elif code == 99:
            return codes[0]
        else:
            return codes[0]


# set inputs to program
data[1] = 12
data[2] = 2
print("Previous State: " + str(prevGravityState(data)))
