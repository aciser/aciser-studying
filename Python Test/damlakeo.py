import random


result = 0
choices = ["bua", "keo", "bao"]
print("bua keo bao")
YOUR_CHOICE = input("ban chon: ")


while YOUR_CHOICE not in choices:
    print("ban chi dc chon bua keo bao")
    YOUR_CHOICE = input("ban chon: ")
else:
    BOT_CHOICE = random.choice(choices)
    print("may chon: " + BOT_CHOICE)
    if BOT_CHOICE == YOUR_CHOICE: #truong hop hoa
        result = 0

    #truong hop thua
    if BOT_CHOICE == "bua" and YOUR_CHOICE == "keo":
        result = 2
    elif BOT_CHOICE == "keo" and YOUR_CHOICE == "bao":
        result = 2
    elif BOT_CHOICE == "bao" and YOUR_CHOICE =="bua":
        result = 2

    #truong hop thang
    if BOT_CHOICE == "bua" and YOUR_CHOICE == "bao":
        result = 1
    elif BOT_CHOICE == "keo" and YOUR_CHOICE == "bua":
        result = 1
    elif BOT_CHOICE == "bao" and YOUR_CHOICE == "keo":
        result = 1
    
if result == 1:
    print("ban da thang")
elif result == 2:
    print("ban da thua")
else:
    print("ban da hoa")