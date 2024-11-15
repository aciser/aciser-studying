var a = [1,2,3,4,5,6,7,8,9,10]
var n = prompt("Nhap vao gia tri n = ")
while(n <= 0){
    alert("n phai lon hon 0")
    n = prompt("Nhap vao gia tri n = ")
}
const phepchia = (giatri)=>{
    let kq = 0
    for(let i = 1 ; i<= giatri;i++){
        kq = kq + (i/giatri)
    }
    return kq
}
console.log(n)
b = phepchia(n)
console.log(b)
const TongSoChan = (array)=>{
    let tong = 0
    for(let i = 0; i<array.length;i++){
        if(a[i]%2==0){
            tong +=a[i]
        }
    }
    return tong
}
const kq = TongSoChan(a)
console.log(kq)