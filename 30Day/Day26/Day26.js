var input = document.querySelector('input')
var showPw = document.querySelector('.password-zone i')
var submit = document.querySelector('button')
var alertNortification = document.querySelector('.alert')

var lowercondition = document.querySelector('.condition.lowercase i')
var lowerconditionText = document.querySelector('.condition.lowercase p')

var uppercondition = document.querySelector('.condition.uppercase i')
var upperconditionText = document.querySelector('.condition.uppercase p')

var numbercondition = document.querySelector('.condition.number i')
var numberconditionText = document.querySelector('.condition.number p')

var symbolcondition = document.querySelector('.condition.specialsymbol i')
var symbolconditionText = document.querySelector('.condition.specialsymbol p')

var lengthcondition = document.querySelector('.condition.length i')
var lengthconditionText = document.querySelector('.condition.length p')


submit.addEventListener('click',function(e){
    if(isLowercase(input.value) && isUppercase(input.value) &&
            isNumber(input.value) && isSymbol(input.value) && isLengthenough(input.value)){
        alertNortification.classList.add('show')
        setTimeout(() => {
            alertNortification.classList.remove('show')
            document.location.reload()
        }, 3000);
    }else{
        if(!isLowercase(input.value)){
            lowercondition.classList.add('error')
            lowerconditionText.classList.add('error')
            setTimeout(() => {
                lowercondition.classList.remove('error')
                lowerconditionText.classList.remove('error')
            }, 1000);
        }
        if(!isLengthenough(input.value)){
            lengthcondition.classList.add('error')
            lengthconditionText.classList.add('error')
            setTimeout(() => {
                lengthcondition.classList.remove('error')
                lengthconditionText.classList.remove('error')
            }, 1000);
        }
        if(!isUppercase(input.value)){
            uppercondition.classList.add('error')
            upperconditionText.classList.add('error')
            setTimeout(() => {
                uppercondition.classList.remove('error')
                upperconditionText.classList.remove('error')
            }, 1000);
        }
        if(!isNumber(input.value)){
            numbercondition.classList.add('error')
            numberconditionText.classList.add('error')
            setTimeout(() => {
                numbercondition.classList.remove('error')
                numberconditionText.classList.remove('error')
            }, 1000);
        }
        if(!isSymbol(input.value)){
            symbolcondition.classList.add('error')
            symbolconditionText.classList.add('error')
            setTimeout(() => {
                symbolcondition.classList.remove('error')
                symbolconditionText.classList.remove('error')
            }, 1000);
        }
    }
})
// show|hide password
showPw.addEventListener('click',function(e){
    if(showPw.className == "fa-regular fa-eye-slash"){
        showPw.className = "fa-regular fa-eye"
        input.type = 'text'
    }else{
        showPw.className = "fa-regular fa-eye-slash"
        input.type ='password'
    }
})
//validate
input.addEventListener('input',function(e){
    if(isLowercase(input.value)){
        lowercondition.className = "fa-solid fa-check"
        lowerconditionText.style.textDecoration = "line-through"
    }else{
        lowercondition.className = "fa-solid fa-xmark"
        lowerconditionText.style.textDecoration = "none"
    }
    if(isUppercase(input.value)){
        uppercondition.className = "fa-solid fa-check"
        upperconditionText.style.textDecoration = "line-through"
    }else{
        uppercondition.className = "fa-solid fa-xmark"
        upperconditionText.style.textDecoration = "none"
    }
    if(isNumber(input.value)){
        numbercondition.className = "fa-solid fa-check"
        numberconditionText.style.textDecoration = "line-through"
    }else{
        numbercondition.className = "fa-solid fa-xmark"
        numberconditionText.style.textDecoration = "none"
    }
    if(isSymbol(input.value)){
        symbolcondition.className = "fa-solid fa-check"
        symbolconditionText.style.textDecoration = "line-through"
    }else{
        symbolcondition.className = "fa-solid fa-xmark"
        symbolconditionText.style.textDecoration = "none"
    }
    if(isLengthenough(input.value)){
        lengthcondition.className = "fa-solid fa-check"
        lengthconditionText.style.textDecoration = "line-through"
    }else{
        lengthcondition.className = "fa-solid fa-xmark"
        lengthconditionText.style.textDecoration = "none"
    }
})
    //lowercase
function isLowercase(pw){
    if(/[a-z]/.test(pw))
        return true
    return false
}
    //Uppercase
function isUppercase(pw){
    if(/[A-Z]/.test(pw))
        return true
    return false
}
    //Number
function isNumber(pw){
    if(/[0-9]/.test(pw))
        return true
    return false
}

    //Symbol
function isSymbol(pw){
    if(/[!@#$%^&*(),.?":{}|<>]/.test(pw))
        return true
    return false
}
    //length
function isLengthenough(pw){
    if(pw.length >= 8)
        return true
    return false
}