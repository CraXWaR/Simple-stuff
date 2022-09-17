function addTable() {
    document.getElementById('button').addEventListener('click', addExpense);

    function addExpense() {
        let nameValue = document.getElementById('name').value;
        let dateValue = document.getElementById('date').value;
        let amountValue = document.getElementById('amount').value;

        if (nameValue == '' || dateValue == '' || amountValue == '') {
            return alert('All fields are required!')
        }

        const tableElement = document.querySelector('table');
        const tbodyElement = document.querySelector('tbody');

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', onDelete)

        tbodyElement.innerHTML += `
        <tr>
            <td>${nameValue}</td>
            <td>${dateValue}</td>
            <td>$${amountValue}</td>
           <td><button class="delBtn">✖</button></td> 
        </tr>`

        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        document.getElementById('amount').value = '';

        tableElement.addEventListener('click', onDelete);

        function onDelete(e) {
            if (!e.target.classList.contains('delBtn')) {
                return;
            }
            if (confirm('Are u sure u want to delete this expense?')) {
                e.target.closest('tr').remove();
            }
        }
    }
}