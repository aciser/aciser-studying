var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnremove = document.querySelector('.remove-Btn')
var tags = ['CMN','clq']

function createTags(){
    content.innerHTML = ''
    for(let i = 0;i<tags.length;i++){
        const tag = tags[i];
        content.innerHTML +=`
        <li>${tag}
            <i class="fa-solid fa-xmark" onclick=removetag(${i})></i>
        </li>`
    }
    content.appendChild(input)
    input.focus()
}
function removetag(index){
    tags.splice(index,1)
    createTags()
}
createTags()
input.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        input.value = ''
        createTags()
    }
})
btnremove.addEventListener('click',function(){
    tags = []
    createTags()
})

