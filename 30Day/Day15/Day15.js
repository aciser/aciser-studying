var mockdata = fetch('https://fakestoreapi.com/products')
.then(res=>{
    return res.json()
})
.then(data=>{
    var wrap = document.querySelector('.wrap')
    wrap.innerHTML = ''
    data.forEach(item=>{ 
        var newProduct = document.createElement('div')
        newProduct.classList.add('product')
        newProduct.innerHTML = `
        <div class="product">
            <img src="${item.image}">
            <div class="info">
                <div class="name">${item.title}</div>
                <div class="price">${item.price}</div>
            </div>
        </div>
        `
        wrap.appendChild(newProduct)
    })
})

var searchInput = document.querySelector('.search-box input')
searchInput.addEventListener('input',function(e){
    let searchText = e.target.value.trim().toLowerCase()
    let listProductsDOM = document.querySelectorAll('.product')
    listProductsDOM.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchText)){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
})