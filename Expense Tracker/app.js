function addTable() {
    document.getElementById('button').addEventListener('click', addExpense);

    function addExpense() {
        let nameValue = document.getElementById('name').value;
        let dateValue = document.getElementById('date').value;
        let amountValue = document.getElementById('amount').value;

        const mainTable = document.querySelector('tbody')

        let trElement = document.createElement('tr');
        let nameTable = document.createElement('td')
        let dateTable = document.createElement('td')
        let amountTable = document.createElement('td')

        const delBtn = document.createElement('button');
        delBtn.textContent = 'delete';
        delBtn.addEventListener('click', onDelete)

        console.log(nameTable, dateTable, amountTable);
        trElement.append(nameTable);
        trElement.append(dateTable);
        trElement.append(amountTable);
        trElement.append(delBtn);

        mainTable.append(trElement);

        function onDelete(e) {
            e.currentTarget.remove();           
        }
    }
}