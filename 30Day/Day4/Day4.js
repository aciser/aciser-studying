var img = document.querySelectorAll('.wrapper-img img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var gallerryImg = document.querySelector('.gallerry-inner img')
var gallerry = document.querySelector('.gallerry')

var currentIndex = 0;
function show(){    
    if(currentIndex==0){
        prev.classList.add('hide')
    }else{prev.classList.remove('hide')}
    if(currentIndex==img.length-1){
        next.classList.add('hide')
    }else{next.classList.remove('hide')}
    gallerryImg.src = img[currentIndex].src
    gallerry.classList.add('show')
}
img.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex = index
        show();
    })
})
prev.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex--;
        show();
    }
})
next.addEventListener('click',function(){
    if(currentIndex < img.length-1){
        currentIndex++;
        show();
    }
})
close.addEventListener('click',function(){
    gallerry.classList.remove('show')
})

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallerry.classList.remove('show')
    }
})