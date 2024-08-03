//declare variable
var clicktop = document.querySelector('.clicktop')
//events onscroll display button clicktop
document.addEventListener('scroll',function(e){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        clicktop.style.display = "block"
    }else{
        clicktop.style.display = "none"
    }
})
//events onclick scrollback to top
clicktop.addEventListener('click',function(e){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})