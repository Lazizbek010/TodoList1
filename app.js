let form = document.querySelector('#form')
let todoInput = document.querySelector('#todo-input')    
let todoList = document.querySelector('.todo-list')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let textTodo = todoInput.value.trim()
    
    if(textTodo){
        let li = document.createElement('li')
        let pi = document.createElement('pi')
        li.classList.add('todo-item') 
        li.textContent = textTodo
        todoList.appendChild(li)
        li.appendChild(pi)
        // done
        let doneBtn = document.createElement('button') 
        doneBtn.classList.add('done')
        doneBtn.innerHTML = '<i class="fa-solid fa-circle-check fa-2x"></i>'
        pi.appendChild(doneBtn)
        // delete
        let deleteBtn = document.createElement('button') 
        deleteBtn.classList.add('delete')
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can fa-2x"></i>'
        pi.appendChild(deleteBtn)
        todoInput.value = ''
    }else{
        alert('biron nima kirit')
        todoInput.value = ''
    }
})

document.addEventListener('click', (e)=>{
    if(e.target.classList[0] == 'delete'){
        let btnParent = e.target.parentElement.parentElement
        btnParent.remove()
    }
})
document.addEventListener('click', (e)=>{
    if(e.target.classList[0] == 'done'){
        let btnParent = e.target.parentElement.parentElement
        btnParent.style.opacity = '0.6'
        btnParent.style.textDecoration = 'line-through'
    }
})

// todolist ideas design
