def main():
    apple_weight = float(input("Nhap vao so can nang: "))
    apple_cost = 8000
    
    total = giatien(apple_weight,apple_cost)
    print("tong gia tien la: " + str(total) + "VND")
    
    cash_in = input("Nhap vao so tien tra nhan vien: ")
    
    xuly = handler(total,cash_in)
    while(xuly == False):
        print("Ban tra chua du tien.")
        cash_in = input("Nhap vao so tien tra nhan vien: ")
        xuly = handler(total,cash_in)
    else:
        cash_out = tinhtien(cash_in, total)
        print("So tien can thoi la: " + str(int(cash_out)) + "VND")
        thoitien(cash_out)

def handler(total, cashin):
    while(total > float(cashin)):
        return False
    return True

def giatien(weight, cost):    
    return int(round(weight*cost,0))

def tinhtien(cashin, total):
    return float(cashin) - total

def thoitien(cashout):
    count = 0
    while cashout >= 500000:
        cashout -= 500000
        count += 1
    if count != 0:
        print("500k: " + str(count) + " to")
    
    count = 0
    while cashout >= 200000:
        cashout -= 200000
        count += 1
    if count != 0:
        print("200k: " + str(count) + " to")
    
    count = 0
    while cashout >= 100000:
        cashout -= 100000
        count += 1
    if count != 0:
        print("100k: " + str(count) + " to")
    
    count = 0
    while cashout >= 50000:
        cashout -= 50000
        count += 1
    if count != 0:
        print("50k: " + str(count) + " to")
    
    count = 0
    while cashout >= 20000:
        cashout -= 20000
        count += 1
    if count != 0:
        print("20k: " + str(count) + " to")
    
    count = 0
    while cashout >= 10000:
        cashout -= 10000
        count += 1
    if count != 0:
        print("10k: " + str(count) + " to")
    
    count = 0
    while cashout >= 5000:
        cashout -= 5000
        count += 1
    if count != 0:
        print("5k: " + str(count) + " to")
    
    count = 0
    while cashout >= 2000:
        cashout -= 2000
        count += 1
    if count != 0:
        print("2k: " + str(count) + " to")
    
    count = 0
    while cashout >= 1000:
        cashout -= 1000
        count += 1
    if count != 0:
        print("1k: " + str(count) + " to")

main()