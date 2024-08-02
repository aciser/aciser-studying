var boxes = document.querySelectorAll('.picture-box')
var targetList = document.querySelectorAll('.target')

var currentTarget = null
//drag
targetList.forEach(target=>{
    target.addEventListener('dragstart',function(e){
        this.classList.add('dragBD')
        currentTarget = this
    })
    target.addEventListener('dragend',function(e){
        this.classList.remove('dragBD')
    })
})

boxes.forEach(box=>{
    box.addEventListener('dragover',function(e){
        e.preventDefault() 
    })
    box.addEventListener('drop',function(e){
        if(!box.querySelector('.target')){
            this.appendChild(currentTarget)
        }        
    })
})
//drop