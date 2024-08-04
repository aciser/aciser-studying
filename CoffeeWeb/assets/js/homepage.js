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
var primeContent = document.querySelector('.prime-content')
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
function productslideshow(){
    let i = 0
    productCarouse.innerHTML =""
    var name = mockdata[i].name
    var pic = mockdata[i].picture
    carouseList[i].style.opacity = '1'
    createContent(name,pic)
        setInterval(() => {
        productCarouse.innerHTML =""
        for(let n = 0; n< carouseList.length;n++){
            carouseList[n].style.opacity = '0.6'
        }
        i++
        if(i >= mockdata.length){
            i=0
            var name = mockdata[i].name
            var pic = mockdata[i].picture
            createContent(name,pic)
            carouseList[i].style.opacity = '1'

        }else{
            var name = mockdata[i].name
            var pic = mockdata[i].picture
            createContent(name,pic)
            carouseList[i].style.opacity = '1'
        }
    }, 8200);
}
productslideshow()
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
//events onclick carouse product
carouseList.forEach(product=>{
    product.addEventListener('click',function(e){
        productCarouse.innerHTML =""
        for(let n = 0; n< carouseList.length;n++){
            carouseList[n].style.opacity = '0.6'
        }
        this.style.opacity = '1'
        var arr = Array.from(carouseList)
        let index = arr.indexOf(this)
        var name = mockdata[index].name
        var pic = mockdata[index].picture
        createContent(name,pic)
    })
})