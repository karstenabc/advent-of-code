file = open("inputs.txt", "r") 

total = 0
for line in file:
    total += int(int(line)/3) - 2

print(total)

