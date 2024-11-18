CURRENT_YEAR = 2024
METER_TO_FEET = 3.281

first_name = input("First Name: ")
last_name = input("Last Name: ")
year_born = int(input("When u where born: "))
height_meter = input("your height: ")

age = CURRENT_YEAR - year_born
height_feet = float(height_meter) * METER_TO_FEET
height_feet = round(height_feet,1)
ismale  = input("are u male yes(y)/no(n): ")

while ismale != "yes" and ismale != "y" and ismale != "no" and ismale != "n":
    print("invalid answer?")
    ismale  = input("are u male yes(y)/no(n): ")
else:
    print("\n____\n")
    print("your name is " + first_name + " " + last_name)
    print("{0} is {1} year old in {2}".format(first_name,str(age),str(CURRENT_YEAR)))
    print("your height is: " + str(height_feet) + " ft")
    
    if ismale == "yes" or ismale == "y":
        if height_feet > 6:
            print("you are",end=" ")
            for i in range(10):
                print("very", end=" ")
            print("stall man.")
        elif  5 < height_feet < 6:
            print("you are stall enough")
        else:
            print("you are short!")
    else:
        if height_feet > 5:
            print("you are",end=" ")
            for i in range(10):
                print("very", end=" ")
            print("stall girl.")
        elif  4.5 < height_feet < 5:
            print("you are stall enough")
        else:
            print("you are short!")