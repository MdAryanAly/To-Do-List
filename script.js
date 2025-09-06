let taskList = document.getElementById('task-list');
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let task = document.createElement('li');
        task.classList.add('task');
        task.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(task);
        taskInput.value = '';

        let deleteBtn = task.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            task.remove();
        });

        let checkbox = task.querySelector('.checkbox');
        checkbox.addEventListener('change', () => {
            task.classList.toggle('completed');
        });
    }
}
