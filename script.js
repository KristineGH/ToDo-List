window.onload = function() {
    addElement()
}
function createElement(todo_text, todo_type){
    return `
    <li class="ToDo_item ` + todo_type + `"> ` + todo_text + `</li>
    `
}

let My_todos = [
    { 
        text : 'todo warning',
        type : 'warning'
    },{
        text : 'todo info',
        type : 'info'
    },{
        text : 'todo error',
        type : 'error'
    },{
        text : 'todo notice',
        type : 'notice'
    }
]

function addElement(){
    let todo_string = '';
    for (let i=0; i<My_todos.length; i++){
        if (My_todos[i].text !== 'undefined' || My_todos[i].text !== '') {
            todo_string += createElement(My_todos[i].text ,My_todos[i].type )
        }
    }
    document.getElementById('ToDo_List').innerHTML = todo_string
    admit()
}

function admit() {
    document.getElementById('Add_button').addEventListener('click',function() {
        addToDo()
    })
}

function addToDo() {
    let to_do_text = document.getElementById('ToDo_Text').value;
    let to_do_type = document.getElementById('ToDo_Type').value;
    if (to_do_text !== 'undefined' || to_do_text !== '') {
        My_todos.push({
        text : to_do_text,
        type : to_do_type
        })
    }
    addElement();
    document.getElementById('ToDo_Text').value = ``
}