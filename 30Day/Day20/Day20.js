var p = document.querySelector('.txtBox p')
var content = p.innerHTML
var index = 0
var isFoward = true
setInterval(function(){
    if(isFoward){
        index++
        if(index>= content.length){
            isFoward = false
        }
    }else{
        index--
        if(index<=0){
            isFoward =true
        }
    }
    p.innerHTML = content.substring(0,index)
}, 200);