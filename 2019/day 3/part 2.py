#read lines
file = open("input.txt", "r") 
lines = []
for line in file:
    lines.append(line)

a = lines[0].split(',')
b = lines[1].split(',')


#store paths
def storeset(data):
    path = set()
    current = [0,0]
    
    for i in range(0, len(data)):
        operation = data[i][0]
        distance = int(data[i][1:])
        
        if (operation == 'U'):
            for j in range(0, (distance)):
                path.add( (current[0], (current[1]+1)) )
                current = [current[0], (current[1]+1)]

        if (operation == 'D'):
            for j in range(0, (distance)):
                path.add( (current[0], (current[1]-1)) )
                current = [current[0], (current[1]-1)]

        if (operation == 'L'):
            for j in range(0, (distance)):
                path.add( ((current[0]-1), current[1]) )
                current = [(current[0]-1), current[1]]

        if (operation == 'R'):
            for j in range(0, (distance)):
                path.add( ((current[0]+1), current[1]) )
                current = [(current[0]+1), current[1]]
    return path


#get intersections
patha = storeset(a)
pathb = storeset(b)
intersections = list(patha.intersection(pathb))


def storelist(data):
    path = []
    current = [0,0]
    
    for i in range(0, len(data)):
        operation = data[i][0]
        distance = int(data[i][1:])
        
        if (operation == 'U'):
            for j in range(0, (distance)):
                path.append( [current[0], (current[1]+1)] )
                current = path[-1]

        if (operation == 'D'):
            for j in range(0, (distance)):
                path.append( [current[0], (current[1]-1)] )
                current = path[-1]

        if (operation == 'L'):
            for j in range(0, (distance)):
                path.append( [(current[0]-1), current[1]] )
                current = path[-1]

        if (operation == 'R'):
            for j in range(0, (distance)):
                path.append( [(current[0]+1), current[1]] )
                current = path[-1]
    return path



def stepstointersect(data, intersection):
    path = storelist(data)
    for i in range(0, len(path)):
        if (path[i] == intersection):
            return (i + 1)


stepsa = []
stepsb = []
for i in range(0, len(intersections)):
    stepsa.append(stepstointersect(a, list(intersections[i])))
    stepsb.append(stepstointersect(b, list(intersections[i])))

min = stepsa[0] + stepsb[0]
for i in range(1, len(stepsa)):
    if ((stepsa[i] + stepsb[i]) < min):
        min = (stepsa[i] + stepsb[i])

print(min)
            
