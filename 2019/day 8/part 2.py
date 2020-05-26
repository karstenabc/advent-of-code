#read image file
file = open("input.txt", "r")
pixels = list(file.read()[:-1])
layers = []

r = 25 * 6
l = len(pixels) / r


# put each layer into list
for i in range(0, int(l)):
    layers.append(pixels[(i * r):(i + 1) * r])


# decode pixels
def decodePixel(layer, pos):
    if layers[layer][pos] == '1':
        return '#'
    elif layers[layer][pos] == '0':
        return ' '
    else:
        #print(layer)
        if layer == 99:
            return ' '
        else:
            return decodePixel(layer + 1, pos)
    

# print output
row = []
for i in range(0, r):
    if (i + 0) % 25 == 0 and i != 0:
        print(''.join(row))
        row = []
    row.append(decodePixel(0, i))
print(''.join(row))
