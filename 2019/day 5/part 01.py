file = open("input.txt", "r")
data = file.readline()
data = data.split(',')
for i in range(0, len(data)):
    data[i] = int(data[i])

def opcodecalc(data, i, code, m1, m2, m3):
    if (code == 1 or code == 2):
        a = data[i+1]
        b = data[i+2]
        if (m1 == 0):
            a = data[a]
        if (m2 == 0):
            b = data[b]

        if (code == 1):
            out = a + b
        if (code == 2):
            out = a * b
            
        if (m3 == 0):
            data[data[i+3]] = out
        if (m3 == 1):
            data[i+3] = out
        
    elif (code == 3):
        id = int(input("Ship ID: "))
        data[i+1] = id

    elif (code == 4):
        print (data[data[i+1]])    

    elif (code == 99):
        return "end"

    return data

    
i = 0
while (i < len(data)):
    instruction = [int(x) for x in str(data[i])]
    while (len(instruction) < 5):
        instruction.insert(0, 0)

    data = opcodecalc(data, i, instruction[4], instruction[2], instruction[1], instruction[0])
    if (data == "end"):
        i = len(data)
    elif (instruction[4] == 1 or instruction[4] == 2):
        i += 4
    elif (instruction[4] == 3 or instruction[4] == 4):
        i += 2
    elif (instruction[4] == 0):
        i += 4
