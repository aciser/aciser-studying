//declare variable
var clicktop = document.querySelector('.clicktop')
var mockdata = [{
    name: 'Morning Fresh',
    picture: '../CoffeeWeb/upload/thumb/morning-fresh-061557932659thumb__346x567.jpg'
},{
    name: 'Summer Breeze',
    picture: '../CoffeeWeb/upload/thumb/summer-breeze-431557932690thumb__346x567.jpg'
},{
    name: 'Premium Blend',
    picture: '../CoffeeWeb/upload/thumb/premium-blend-641557932648thumb__346x567.jpg'
},{
    name: 'Flagranti',
    picture: '../CoffeeWeb/upload/thumb/flagranti-261557932772thumb__346x567.jpg'
},{
    name: 'Pacamara',
    picture: '../CoffeeWeb/upload/thumb/pacamara-731557932864thumb__346x567.jpg'
},{
    name: 'Brim Special Coffee',
    picture: '../CoffeeWeb/upload/thumb/the-best-coffee-981536722719thumb__346x567.png'
},{
    name: 'Aramde Nexus One',
    picture: '../CoffeeWeb/upload/thumb/aremde-nexus-one-041557978630thumb__346x567.jpg'
}]
var carouseList = document.querySelectorAll('.navigation-point')
var productCarouse = document.querySelector('.product-carouse')
var arrCarouse = Array.from(carouseList)

//init
for(let i = 0;i<mockdata.length;i++){
    var name = mockdata[i].name
    var pic = mockdata[i].picture
    createContent(name,pic)
}
carouseSlideshow()
carouseClick()
//create content
function createContent(n,p){
    var primeContent = document.createElement('div')
    primeContent.classList.add('prime-content')
    primeContent.innerHTML =`
            <a href="#"><img src="${p}"></a>
                <div class="detail-content">
                    <h2>Our Products</h2>
                    <h1>${n}</h1>
                    <p>Location: Bao Loc - Lam Dong VietNam</p>
                    <div class="readmore-btn">
                        <button>View Detail</button>
                    </div>
                </div>`
    productCarouse.appendChild(primeContent)
}
//Carouse slideshow
function carouseSlideshow(){
    var primeContent = document.querySelectorAll('.prime-content')
    var arr = Array.from(primeContent)
    let j = 0
    carouseList[j].style.opacity = '1'
    setTimeout(() => {
        j=1
    }, 6000);
    setInterval(() => {
        if(j < arr.length){
            for(let i = 0 ; i <arr.length;i++){
                primeContent[i].style.transform = `translateX(-${(j)*100}%)`
            }
            for(let i = 0; i<arrCarouse.length;i++){
                carouseList[i].style.opacity = '0.6'
            }
            carouseList[j].style.opacity = '1'
            j++
        }else{
            j = 0
            setTimeout(() => {
                j=1
            }, 6000);
            for(let i = 0 ; i <arr.length;i++){
                primeContent[i].style.transform = `translateX(-${(j)*100}%)`
            }
            for(let i = 0; i<arrCarouse.length;i++){
                carouseList[i].style.opacity = '0.6'
            }
            carouseList[j].style.opacity = '1'
        }      
    }, 6000);
}
//events onscroll display button clicktop
document.addEventListener('scroll',function(e){
    e.preventDefault()
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        clicktop.style.display = "block"
    }else{
        clicktop.style.display = "none"
    }
})
//events onclick scrollback to top
clicktop.addEventListener('click',function(e){
    e.preventDefault()
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

//events click carouse nav
function carouseClick(){
    var primeContent = document.querySelectorAll('.prime-content')
    carouseList.forEach(notch=>{
        notch.addEventListener('click',function(e){
            var currentIndex = arrCarouse.indexOf(this)
            for(let i =0 ;i<arrCarouse.length;i++){
                carouseList[i].style.opacity = '0.6'
                primeContent[i].style.transform = `translateX(-${(currentIndex)*100}%)`
            }
            this.style.opacity = '1'
        })
    })
}