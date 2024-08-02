var searchBox = document.querySelector('.search-box')
var searchBtn = document.querySelector('.search-btn')
var searchInput = document.querySelector('.input')
searchBtn.addEventListener('click',function(){
    searchBox.classList.toggle('open')
    searchInput.focus();
})
