/**
 * @description user page logic
 * @author Uni
 */

axios.interceptors.request.use(
    config => {
    if (localStorage.getItem("oneToken") != null) {
        config.headers["authorization"] ='Bearer ' + localStorage.getItem("oneToken");
    }

    return config;
    },
    err => Promise.reject(err)
);


/**
 * @description global value
 */
let todoCreate = 0;

/**
 * @description switch three main components
 */
function changePage() {
    const footerBox = $('.footer-box'),
          mainBox = $('.main-box'),
          len = footerBox.length,
          index = footerBox.index($(this));  
    for (let i = 0; i < len; i++) {
        mainBox.removeClass('main-show');
        footerBox.removeClass('footer-active');
    }
    mainBox[index].classList.add('main-show');
    footerBox[index].classList.add('footer-active');
}

function createTodoTable() {
    const table = `
        <div id="todo-table">
                        
        </div>
    `
    return table;
}


function showTodoTable() {
    const todo = $("#todo");
    let table = $('#todo-table'),
          len = table.length;
    
    if (!(len > 0)) {
        table = createTodoTable();
        todo.append(table)
    }
    $('#shadow-box').fadeIn();
    $('#todo #todo-table').attr('class', 'todo-table-show');
    todoCreate = 1;
    console.log($("input[type='radio']:checked").val())
}

function hideTodoTable() {
    $('#todo #todo-table').attr('class', 'todo-table-hide');
    clearData();
}

function clearData() {
    const toDoName = $("#todo-name"),
          priority = $("input[type='radio']"),
          timer = $('#todo-timer');

    toDoName.val('');
    timer.val('');
    priority.removeAttr('checked');
    $("input[type='radio']").eq(2).prop('checked', true);
}

function postToDoData() {
    const todo = $("#todo-name").val(),
          priority = $("input[type='radio']:checked").val(),
          timer = $("#todo-timer").val();

    if (!(todo && priority && timer)) {
        alert('请输入完整待办信息')
    } else {
        axios.post('/api/user/todo', {
            todo,
            priority,
            timer
        })
        .then(res => {
            console.log(res.data)
        })
    }
}

function createToDoItem() {

}

function createToDo() {
    postToDoData();
    clearData();
    hideTodoTable();

}

// trigger parts
$('.footer-box').click(changePage);
$('#addTodo').click(showTodoTable);
$('#table-cancel').click(hideTodoTable);
$('.main-create').click(createToDo);

// $(document).click((e) => {
//     const table = $('#todo-table')[0],
//           _table = $('#todo #todo-table'),
//           shadow = $('#shadow-box');
//     if (todoCreate === 1)
//         todoCreate = 2;
//     else if (todoCreate === 2 && e.target !== table) {
//         _table.attr('class', 'todo-table-hide');
//         shadow.fadeOut();
//     }
        
// });