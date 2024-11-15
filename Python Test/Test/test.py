CURRENT_YEAR = 2024
METER_TO_FEET = 3.281

first_name = input("First Name: ")
last_name = input("Last Name: ")
year_born = int(input("When u where born: "))
height_meter = input("your height: ")

age = CURRENT_YEAR - year_born
height_feet = float(height_meter) * METER_TO_FEET
height_feet = round(height_feet,1)

print("\n____\n")
print("your name is " + first_name + " " + last_name)
print("{0} is {1} year old in {2}".format(first_name,str(age),str(CURRENT_YEAR)))
print("your height is: " + str(height_feet) + " ft")
