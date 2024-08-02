var container = document.querySelector('.container')
//tao khoi
for(let i = 0 ; i<198;i++){
    var square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
}
//set timeout 0.4s
var timeout = 400
//chon tat ca khoi
var squareList = document.querySelectorAll('.square')
//set event mouseover
squareList.forEach(squareItem=>{
    squareItem.addEventListener('mouseover',function(e){
        //lay mau random
        var randomcolor = Math.floor(Math.random()*16777215).toString(16)
        //do mau vao khoi
        this.style.backgroundColor = `#${randomcolor}`
        this.style.boxShadow = `0 0 100px #${randomcolor},0 0 100px #${randomcolor}`
        //cancel do mau
        setTimeout(() => {
            this.style.backgroundColor = `#1d1d1d`
            this.style.boxShadow = `0 0 10px rgb(0,0,0)`
        }, timeout);
    })
})