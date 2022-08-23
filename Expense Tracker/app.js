function addTable() {
    document.getElementById('button').addEventListener('click', addExpense);

    function addExpense() {
        let nameValue = document.getElementById('name').value;
        let dateValue = document.getElementById('date').value;
        let amountValue = document.getElementById('amount').value;

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
           <td><button class="delBtn">Delete</button></td> 
        </tr>`

        tableElement.addEventListener('click', onDelete);

        function onDelete(e) {
            if (!e.target.classList.contains('delBtn')) {
                return;
            }
            e.target.closest('tr').remove();
        }
    }
}