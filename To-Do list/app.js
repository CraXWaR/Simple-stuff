function taskList() {
    document.getElementById('taskBtn').addEventListener('click', onSubmit);

    function onSubmit() {
        let textField = document.getElementById('tasks');

        if (textField.value == "") {
            return alert('The text field is required');
        }

        const ulElement = document.querySelector('ul');

        let liElement = document.createElement('li');
        liElement.textContent = textField.value;

        let delBtn = document.createElement('button');
        delBtn.textContent = 'delete';
        delBtn.id = 'deleteBtn'
        delBtn.addEventListener('click', onDelete);
        let doneBtn = document.createElement('button');
        doneBtn.textContent = 'done';
        doneBtn.id = 'completeBtn'
        doneBtn.addEventListener('click', onComplete);

        liElement.appendChild(delBtn);
        liElement.appendChild(doneBtn);

        ulElement.appendChild(liElement);

        textField.value = "";

        function onDelete() {
            liElement.remove();
        }

        function onComplete(e) {
            let completedTasks = document.getElementById('complete');
            let task = e.currentTarget.parentNode
            e.currentTarget.remove();
            delBtn.textContent = 'clear'
            completedTasks.appendChild(task);
        }

    }
}