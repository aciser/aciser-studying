var control = document.querySelector('.control')
var videoControl = document.querySelector('.video-control')
var volumeControl = document.querySelector('.volume')
var playBtn = document.querySelector('.play')
var mute = document.querySelector('.mute-volume')
var video = document.querySelector('video')
var process = document.querySelector('.process')
var videoProcess = document.querySelector('.video-process')
var volumnValue = document.querySelector('.volume-value')
var prevBtn = document.querySelector('.prev')
var skipBtn = document.querySelector('.skip')


init()
//init
function init(){
    videoControl.classList.add('hide')
    volumeControl.classList.add('hide')
    timeout = 5000
    volumnValue.value = 100
    video.volume = volumnValue.value/100
}
control.addEventListener('mouseenter',function(e){
    videoControl.classList.remove('hide')
    volumeControl.classList.remove('hide')
})
control.addEventListener('mouseleave',function(e){
    setTimeout(() => {
        videoControl.classList.add('hide')
        volumeControl.classList.add('hide')
    }, timeout);
})
//time convert
function timeconvert(time){
    var minute = Math.floor(time/60)
    var second = time%60
    return `${minute}:${second}`
}

//play-pause  button
playBtn.addEventListener('click',function(e){
    this.classList.toggle('pause')
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
    video.pause()
    var pauseBtn = document.querySelector('.play.pause')
    if(pauseBtn){
        pauseBtn.innerHTML =`<i class="fa-solid fa-pause"></i>`
        video.play()
        videoProcess.max = Math.round(video.duration)
        video.addEventListener('timeupdate',function(e){
            process.innerText = `${timeconvert(Math.round(video.currentTime))}/${timeconvert(Math.round(video.duration))}`
            videoProcess.value = Math.round(video.currentTime)
        })        
    }
})

//volume-mute button
mute.addEventListener('click',function(e){
    this.classList.toggle('mute')
    mute.innerHTML = `<i class="fa-solid fa-volume-high">`
    video.muted = false
    volumnValue.value = 10
    video.volume = volumnValue.value/100
    var muteBtn = document.querySelector('.mute-volume.mute')
    if(muteBtn){
        muteBtn.innerHTML =`<i class="fa-solid fa-volume-xmark"></i>`
        video.muted = true
        volumnValue.value = 0
    }
})
//volume process
volumnValue.addEventListener('change',function(e){
    video.volume = this.value/100
})

//prev btn
prevBtn.addEventListener('click',function(e){
    video.currentTime -= 5
    video.play()
})
//skip btn
skipBtn.addEventListener('click',function(e){
    video.currentTime += 5
    video.play()
})

videoProcess.addEventListener('change',function(e){
    video.currentTime = this.value
})