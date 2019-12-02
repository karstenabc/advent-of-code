file = open("inputs.txt", "r") 

def fuelReq(amount):
    req = int(int(amount)/3) - 2
    if (req < 0):
        return 0
    else:
        return req

overall = 0

for line in file:
    module = fuelReq(line)
    fuel = fuelReq(module)
    total = module + fuel

    while (fuel > 0):
        fuel = fuelReq(fuel)
        total += fuel
        
    overall += total
    
print(overall)
