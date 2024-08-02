var aniamtionElements = document.querySelectorAll('.onscroll')

function toggleanimation(element){
    var rect = element.getClientRects()[0]
    var screenheight = window.innerHeight

    if(!(rect.bottom < 0 || rect.top > screenheight)){
        element.classList.add('end')
    }else{
        element.classList.remove('end')
    }
}
function checkAnimation(){
    aniamtionElements.forEach(el=>{
        toggleanimation(el)
    })
}
window.onscroll = checkAnimation