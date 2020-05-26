


for i in range(0, len(input))



for i in range(0, len(input)):
    code = input[i]

    if (code == 1 or code == 2):
        a = input[input[i+1]]
        b = input[input[i+2]]
        out = input[i+3]

        if (code == 1):
            input[out] = a + b
        elif (code == 2):
            input[out] = a * b


    elif (code == 3):
        input[input[i+1]] = input[i+1]

    elif (code == 4):
        print (input[input[i+1]])
        



    elif (code == 99):
        print("-----" + str(input[0]) + "-----")
    else:
        print("*****" + str(input[0]) + "*****")

print (input[0])
