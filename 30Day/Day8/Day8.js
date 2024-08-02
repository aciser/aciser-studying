var userName = document.querySelector('#Username')
var email = document.querySelector('#Email')
var password = document.querySelector('#pass')
var passwordConfirm = document.querySelector('#confirm')
var form = document.querySelector('form')

function showError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}
function checkEmpty(listInput){
    let isEmty = false
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            showError(input,'Ko dc de trong')
            isEmty = true
        }else{
            showSuccess(input)
            isEmty = false
        }
    })
    return isEmty
}
function checkLengthError(input,min,max){
    if(input.value.length < min){
        showError(input,`khong dc duoi ${min} ky tu`)
        return true
    }else if(input.value.length  > max){
        showError(input,`khong dc qua ${max} ky tu`)
        return true
    }
    return false
}
function checkmath(pwInput,Confirmpw){
    if(pwInput.value !== Confirmpw.value){
        showError(Confirmpw,'Mat khau khong khop')
        return true
    }
    return false
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    let isEmtyError = checkEmpty([userName,email,password,passwordConfirm])
    let checklength = checkLengthError(userName,6,11)
    let matcherror = checkmath(password,passwordConfirm)

    if(isEmtyError || checklength || matcherror == true){

    }else{
        form.submit()
    }
})