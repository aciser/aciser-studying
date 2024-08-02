var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var decrease = document.querySelector('#decrease')
var increase = document.querySelector('#increase')
var clear = document.querySelector('#clear')
var size = document.querySelector('#size')
var save = document.querySelector('#save')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var pos1 = {
    x:0,
    y:0
}
var pos2 = {
    x:0,
    y:0
}
var isDrawing = false
var currentColor = '#000000'
size.value = 5
var currentsize = 5
document.addEventListener('mousedown',function(e){
    pos1 ={
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true
})
document.addEventListener('mousemove',function(e){
    if(isDrawing){
        pos2 = {
            x: e.offsetX,
            y: e.offsetY
        }
        ctx.beginPath()
        ctx.arc(pos1.x,pos1.y,size.value,0,2*Math.PI)
        ctx.fill()
        ctx.moveTo(pos1.x,pos1.y)
        ctx.lineTo(pos2.x,pos2.y)
        ctx.fillStyle = currentColor
        pos1.x = pos2.x
        pos1.y = pos2.y
    }  
})
document.addEventListener('mouseup',function(e){
    isDrawing = false
})

color.addEventListener('change',function(e){
    currentColor = e.target.value
})
eraser.addEventListener('click',function(e){
    currentColor = '#ffffff'
    ctx.lineWidth = 20
})
decrease.addEventListener('click',function(e){
    currentsize -=5
    currentsize = currentsize > 5 ? currentsize:5
    size.value = currentsize
})
increase.addEventListener('click',function(e){
    currentsize +=5
    currentsize = currentsize < 30 ? currentsize:30
    size.value = currentsize
})
clear.addEventListener('click',function(e){
    var canvasstat = canvas.getClientRects()[0]
    ctx.clearRect(0,0,canvasstat.width,canvasstat.height)
})
save.addEventListener('click',function(e){
    var savefile = canvas.toDataURL()
    save.setAttribute('download','cmn.png')
    save.setAttribute('href',savefile)
})