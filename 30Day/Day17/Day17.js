var counter = document.querySelectorAll('.counter')
function count(el){
    var number = el.querySelector('.number')
    var to = parseInt(number.innerText)
    var count = 0
    var time = 200
    var step = to/time
    let counting = setInterval(() => {
        count += step
        if(count > to){
             clearInterval(counting)
             number.innerText = to
        }else{
            number.innerText = Math.round(count)
        }
    }, 1);
}
counter.forEach(item=>{
    count(item)
})