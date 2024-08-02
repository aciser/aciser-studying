var mirror = document.querySelector('#mirror')
var img = document.querySelectorAll('img')
img.forEach(image=>{
    image.addEventListener('mousemove',function(e){
    
        var percentX = (e.offsetX/this.offsetWidth)*100
        var percentY = (e.offsetY/this.offsetHeight)*100

        let bgimg = this.src
        mirror.style.backgroundImage = `url('${bgimg}')`
        mirror.style.backgroundPosition = `${percentX}% ${percentY}%`
        mirror.style.top = `${e.clientY}px`
        mirror.style.left = `${e.clientX}px`
    })
    image.addEventListener('mouseleave',function(e){
        mirror.classList.add('hide')
        this.style.cursor = "default"
    })
    image.addEventListener('mouseenter',function(e){
        mirror.classList.remove('hide')
        this.style.cursor = "none"
    })
})
