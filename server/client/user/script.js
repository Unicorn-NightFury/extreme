/**
 * @description user page logic
 * @author Uni
 */

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
}

function hideTodoTable() {
    $('#todo #todo-table').attr('class', 'todo-table-hide');
}

// trigger parts
$('.footer-box').click(changePage);
$('#addTodo').click(showTodoTable);
$('#table-cancel').click(hideTodoTable);

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