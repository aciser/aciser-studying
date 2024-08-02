var imgFeature = document.querySelector('.img-feature')
var imgList = document.querySelectorAll('.img-list img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')
var currentIndex = 0

function updateImgIndex(index){
    document.querySelectorAll('.img-list div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = imgList[index].getAttribute('src')
    imgList[index].parentElement.classList.add('active')
}

imgList.forEach((imgElement,index)=>{
    imgElement.addEventListener('click',e=>{
        updateImgIndex(index)
    })
})

prevBtn.addEventListener('click',e=>{
    if(currentIndex==0){
        currentIndex = imgList.length -1
    }else{
        currentIndex--
    }
    imgFeature.style.animation = ''
    setTimeout(()=>{
        updateImgIndex(currentIndex)
        imgFeature.style.animation = 'slide-left 1s ease-in-out forwards'
    },200)
})
nextBtn.addEventListener('click',e=>{
    if(currentIndex == imgList.length -1){
        currentIndex = 0
    }else{
        currentIndex++
    }
    imgFeature.style.animation = ''
    setTimeout(()=>{
        updateImgIndex(currentIndex)
        imgFeature.style.animation = 'slide-right 1s ease-in-out forwards'
    },200)
})