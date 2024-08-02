var myImg = document.querySelector('#my-img')
var preview = document.querySelector('.preview')
myImg.addEventListener('change',function(e){
    var img = document.createElement('img')
    var file = myImg.files[0]
    img.src = URL.createObjectURL(file)
    preview.appendChild(img)
})