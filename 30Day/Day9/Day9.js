var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var temValue = document.querySelector('.value')
var shortDesc = document.querySelector('.short-description')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(capitalValue){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=ac2fd786af87711f0dff2dd24436e376`
    let data = await fetch(apiURL).then(res=> res.json())
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        let temp = (data.main.temp - 273.15).toFixed(0)
        temValue.innerText = temp
        shortDesc.innerText = data.weather[0] ?.main
        visibility.innerText = data.visibility +'m'
        wind.innerText = data.wind.speed +'m/s'
        sun.innerText = data.clouds.all + '%'
        time.innerText = new Date().toLocaleDateString('vi')
        if(temp > 30){
            body.setAttribute('class','hot')
        }else if(temp <= 30){
            body.setAttribute('class','cold')
        }
    }else{
        content.classList.add('hide')
    }
}
search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        let capitalValue  = search.value.trim()
        changeWeatherUI(capitalValue)
    }
})
changeWeatherUI('ha noi')