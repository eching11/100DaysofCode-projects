# plated.py - Input total amount of weight and plated.py will output what plates and how many you need to add/subtract from the bar.
#! python3

# Ask user for starting weight and next weight
# + bar or no bar

start = int(input("Enter starting weight: "))
totalWeight = int(input("Total weight for this set: "))

# Plates available
bar = 45
two_five = 2.5
five = 5
ten = 10
twenty_five = 25
thirty_five = 35
forty_five = 45


# calc weight per side
addWeight = (totalWeight - bar)/2
print("Total per side: " + str(addWeight))


count45 = 0
count35 = 0
count25 = 0
count10 = 0
count5 = 0
count2_5 = 0

while addWeight >= forty_five:
	addWeight = addWeight - forty_five
	count45 += 1
if count45 > 0:
	print("Number of 45 lbs plates: " + str(count45))

while addWeight >= thirty_five:
	addWeight = addWeight - thirty_five
	count35 += 1
if count35 > 0:
	print("Number of 35 lbs plates: " + str(count35))

while addWeight >= twenty_five:
	addWeight = addWeight - twenty_five
	count25 += 1
if count25 > 0:
	print("Number of 25 lbs plates: " + str(count25))

while addWeight >= ten:
	addWeight = addWeight - ten
	count10 += 1
if count10 > 0:
	print("Number of 10 lbs plates: " + str(count10))

while addWeight >= five:
	addWeight = addWeight - five
	count5 += 1
if count5 > 0:
	print("Number of 5 lbs plates: " + str(count5))
		
while addWeight >= two_five:
	addWeight = addWeight - two_five
	count2_5 += 1
if count2_5 > 0:
	print("Number of 2.5 lbs plates: " + str(count2_5))
