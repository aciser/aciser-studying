var body = document.querySelector('body')
var switchMode = document.querySelector('#Dark-mode')

function init(){
    let mode = localStorage.getItem('mode') ? "dark" : ""
    body.setAttribute('class',mode)
    if(mode !=""){
        switchMode.checked = true
    }else{
        switchMode.checked = false
    }
}
init()
switchMode.addEventListener('click',function(e){
    body.classList.toggle('dark')
    let mode = body.getAttribute('class') ? "dark" : ""
    localStorage.setItem('mode',mode)
})