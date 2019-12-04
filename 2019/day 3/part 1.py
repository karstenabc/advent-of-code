#read lines
file = open("input.txt", "r") 
lines = []
for line in file:
    lines.append(line)

a = lines[0].split(',')
b = lines[1].split(',')


#store paths as a set
def store(data):
    path = set()
    x = 0
    y = 0
    
    for i in range(0, len(data)):
        operation = data[i][0]
        distance = int(data[i][1:])
        
        if (operation == 'U'):
            for j in range(0, (distance)):
                y += 1
                path.add((x, y))

        if (operation == 'D'):
            for j in range(0, (distance)):
                y -= 1
                path.add((x, y))

        if (operation == 'L'):
            for j in range(0, (distance)):
                x -= 1
                path.add((x, y))

        if (operation == 'R'):
            for j in range(0, (distance)):
                x += 1
                path.add((x, y))
    return path


#get intersections
patha = store(a)
pathb = store(b)
intersections = list(patha.intersection(pathb))


#find minimum distance
def manhattan(point):
    return abs(point[0]-0) + abs(point[1]-0)

min = manhattan(intersections[0])
for i in range(1, len(intersections)):
    if (manhattan(intersections[i]) < min):
        min = manhattan(intersections[i])
    
#print answer
print(min)
            
