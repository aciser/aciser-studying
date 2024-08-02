var btnSuccess = document.querySelector('.control .success')
var btnWarning = document.querySelector('.control .warning')
var btnError = document.querySelector('.control .error')

btnSuccess.addEventListener('click', function(){
    createToast('success')
})
btnWarning.addEventListener('click',function(){
    createToast('warning')
})
btnError.addEventListener('click',function(){
    createToast('error')
})

function createToast(status,timeout){
    var toast = document.createElement('div')
    toast.classList.add('toast-wrapper')
    toast.classList.add(status)
    if(status == 'success'){
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <span class="message">This is success message</span>
            <span class="countdown"></span>
            `
    }else if (status == 'warning'){
        toast.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is Warning message</span>
            <span class="countdown"></span>
            `
    }else if(status == 'error'){
        toast.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span class="message">This is Error message</span>
        <span class="countdown"></span>
        `
    }
    var toastList = document.getElementById('toast-wrapper')
    toastList.appendChild(toast)
    timeout = timeout || 5000
    setTimeout(function(){
        toast.style.animation = 'slidehide 2s ease forwards'
    },timeout)
    setTimeout(function(){
        toast.remove()
    },timeout + 2000)
}