mau = 0

for i in range(100):
    if i == 1:
        continue
    elif i % 2 != 0:
        mau += 1/i

kq = round(1/mau,2)
print("ket qua = " + str(kq))