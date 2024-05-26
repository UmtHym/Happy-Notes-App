const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const editButtons = document.querySelectorAll('.edit')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(editButtons).forEach((el)=>{
    el.addEventListener('click', editTodo)
})

async function deleteTodo(){
    const todoId = this.getAttribute('data-id')
    try{
        const response = await fetch(`todos/deleteTodo/${todoId}`, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function editTodo() {
    const todoId = this.getAttribute('data-id')
    const newTodo = prompt('Enter the new todo:')

    if (!newTodo || newTodo.trim().length === 0) {
        
        alert('Please enter a todo with more than 0 characters.');
        return;
    }
    try {
        const response = await fetch(`/todos/editTodo/${todoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ todo: newTodo })
        });
        if (response.ok) {
            location.reload()
            
        } else {
            console.log('Error updating todo')
        }
    } catch (error) {
        console.error('Error:', error)
    }
}