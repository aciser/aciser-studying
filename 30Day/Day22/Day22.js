var listBtn = document.querySelectorAll('.sorting button')
var foodlist = document.querySelector('.food-list')
var imglist = document.querySelectorAll('img')
///init
var arr = []
imglist.forEach(item=>{
    arr.push({
        srcr:item.src,
        type:item.getAttribute('type')
    })
})
function render(list){
    foodlist.innerHTML = ''
    list.forEach(item=>{
        let foodImg = document.createElement('div')
        foodImg.classList.add('food-img')
        foodlist.appendChild(foodImg)
        let imgElement = document.createElement('img')
        imgElement.src = item.srcr
        imgElement.setAttribute('type',item.type)
        foodImg.appendChild(imgElement)
    }) 
}

//click event
listBtn.forEach(btn=>{
    btn.addEventListener('click',e=>{
        document.querySelector('.sorting button.active').classList.remove('active')
        e.target.classList.add('active')
        let type = e.target.getAttribute('type')
        if(type == "All"){
            render(arr)
            return
        }
        let filterData = arr.filter(food=>{
            return food.type == type
        })
        render(filterData)
    })
})