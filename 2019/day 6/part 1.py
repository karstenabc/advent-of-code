#read orbit file
file = open("input.txt", "r") 
orbitList = []
indirect = 0
orbitCount = 0
orbits = {}

# read orbits into a list
for line in file:
    orbitList.append(line)

for i in range(0, len(orbitList)):
    if i < len(orbitList)-1:
        orbitList[i] = orbitList[i][:-1]


# store orbits in dictionary child:parent
for i in range(0, len(orbitList)):
    orbit = orbitList[i].split(')')
    orbits[str(orbit[1])] = str(orbit[0])


# compute indirect orbits for given planet
def getIndirectOrbits(planet):
    if str(planet) in orbits:
        global indirect
        indirect += 1
        parent = orbits[planet]
        getIndirectOrbits(parent)


# child planet to list
planets = list(orbits.keys())
# calculate all orbits for each child planet
for i in range(0, len(planets)):
    indirect = 0
    getIndirectOrbits(planets[i])
    orbitCount = orbitCount + indirect


print("Total orbits: " + str(orbitCount))
