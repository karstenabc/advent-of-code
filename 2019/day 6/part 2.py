#read orbit file
file = open("input.txt", "r") 
orbitList = []
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
def getOrbitToCOM(planet):
    if str(planet) in orbits:
        global path
        path += str(orbits[planet]) + ','
        getOrbitToCOM(orbits[planet])


# get lists to COM
path = ''
getOrbitToCOM('YOU')
YOU = path.split(',')[:-1]
path = ''
getOrbitToCOM('SAN')
SAN = path.split(',')[:-1]


# get highest common point
def getCommonPlanet():
    for i in range(0, len(YOU)):
        for j in range(0, len(SAN)):
            if YOU[i] == SAN[j]:
                print("Common: " + str(YOU[i]))
                print("Transfers from YOU: " + str(i))
                print("Transfers from SAN: " + str(j))
                print("Transfers in total: " + str(i + j))
                return


getCommonPlanet()
