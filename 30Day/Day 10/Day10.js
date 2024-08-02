var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todo')

form.addEventListener('submit',function(event){
    event.preventDefault()
    let val = input.value.trim()
    if(val){
        addTodoElement({
            text:val,
        })
        saveTodoList()
    }
    input.value = ''

})

function addTodoElement(todo){
    var li = document.createElement('li')
    li.innerHTML=`
        <span>${todo.text}</span>
        <i class="fa-solid fa-trash-can"></i>
    `
    if(todo.status === 'done'){
        li.setAttribute('class','done')
    }
    li.addEventListener('click',function(){
        this.classList.toggle('done')
        saveTodoList()
    })
    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove()
        saveTodoList()
    })
    todos.appendChild(li)
}
function saveTodoList(){
    let liList = document.querySelectorAll('li')
    let liListStorage = []
    liList.forEach(function(item){
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')
        liListStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList',JSON.stringify(liListStorage))
}
function init(){
    let data = JSON.parse(localStorage.getItem('todoList'))
    data.forEach(function(item){
        addTodoElement(item)
    })
}

init()