#read lines
file = open("input.txt", "r") 
lines = []
for line in file:
    lines.append(line)

a = lines[0].split(',')
b = lines[1].split(',')


#store paths
def addpoint(path, x, y):
    if (type(path) == set):
        path.add((x, y))
    else:
        path.append([x, y])
    return path


def store(data, path):
    x = 0
    y = 0
    
    for i in range(0, len(data)):
        operation = data[i][0]
        distance = int(data[i][1:])
        
        if (operation == 'U'):
            for j in range(0, (distance)):
                y += 1
                path = addpoint(path, x, y)

        if (operation == 'D'):
            for j in range(0, (distance)):
                y -= 1
                path = addpoint(path, x, y)

        if (operation == 'L'):
            for j in range(0, (distance)):
                x -= 1
                path = addpoint(path, x, y)

        if (operation == 'R'):
            for j in range(0, (distance)):
                x += 1
                path = addpoint(path, x, y)
    return path    


def storeset(data):
    path = set()
    return store(data, path)

def storelist(data):
    path = []
    return store(data, path)



#get intersections
patha = storeset(a)
pathb = storeset(b)
intersections = list(patha.intersection(pathb))


def stepstointersect(data, intersection):
    path = storelist(data)
    for i in range(0, len(path)):
        if (path[i] == intersection):
            return (i + 1)


for i in range(0, len(intersections)):
    stepsa = stepstointersect(a, list(intersections[i]))
    stepsb = stepstointersect(b, list(intersections[i]))
    if (i == 0):
        min = stepsa + stepsb
    elif ((stepsa + stepsb) < min):
        min = stepsa + stepsb

print (min)
            
