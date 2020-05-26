#read orbit file
file = open("input.txt", "r") 
pixels = []

# read pixels into a list
for line in file:
    pixels = list(line)[:-1]

w = 25
h = 6
r = w * h
size = len(pixels)
layers = len(pixels) / r


# get layer with fewest 0's
fewest = [-1, r]
for i in range(0, int(layers)):
    zeroCount = 0
    for j in range((i * r), (i * r) + r):
        if pixels[j] == '0':
            zeroCount += 1
    if zeroCount < fewest[1]:
        fewest[0] = i
        fewest[1] = zeroCount


# get number of 1's and 2's from layer with fewest 0's
oneCount = 0
twoCount = 0
for i in range((fewest[0] * r), (fewest[0] * r) + r):
    if pixels[i] == "1":
        oneCount += 1
    elif pixels[i] == "2":
        twoCount += 1


# output checksum
print("Checksum: " + str(oneCount * twoCount))
