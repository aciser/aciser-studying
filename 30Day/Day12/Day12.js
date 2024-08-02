var proccess = document.querySelector('.process')
var range = document.querySelector('.range')
var current = document.querySelector('.process span')
var body = document.querySelector('body')
function currentProcess(percent){
    proccess.style.width = `${percent}%`
    current.innerText = `${percent}%`
    body.style.background = `rgba(0,0,0,${percent/100})`
}

range.addEventListener('mousemove', function(e){
    var processWidth = e.pageX - this.offsetLeft
    var percent = processWidth/ this.offsetWidth *100
    percent = Math.round(percent)
    currentProcess(percent)
})

currentProcess(30)