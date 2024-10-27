document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('bgColor').addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});

document.getElementById('fontSize').addEventListener('input', function() {
    document.body.style.fontSize = this.value + 'px';
});

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('fontStyle').addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});

function addTask() {
    var taskText = document.getElementById('taskInput').value;
    if (taskText === "") return;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));

    var closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.appendChild(document.createTextNode("X"));
    closeButton.onclick = function () {
        this.parentElement.style.display = 'none';
    };

    var editButton = document.createElement("span");
    editButton.className = "edit";
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.onclick = function () {
        var newTaskText = prompt("Edit task:", this.parentElement.firstChild.nodeValue);
        if (newTaskText !== null && newTaskText !== "") {
            this.parentElement.firstChild.nodeValue = newTaskText;
        }
    };

    li.appendChild(closeButton);
    li.appendChild(editButton);
    document.getElementById('taskList').appendChild(li);

    document.getElementById('taskInput').value = "";
}
