document.getElementById('calculate-btn').addEventListener('click', function () {
    var regex = /^[0-9]+$/;

    const incomeElement = document.getElementById('income').value
    const foodElement = document.getElementById('food').value
    const rentElement = document.getElementById('rent').value
    const clothesElement = document.getElementById('clothes').value


    const incomeMatchByNumber = incomeElement.match(regex)
    const foodMatchByNumber = foodElement.match(regex)
    const rentMatchByNumber = rentElement.match(regex)
    const clothesMatchByNumber = clothesElement.match(regex)

    if (incomeElement === '') {
        return alert('Please fill out INCOME field!!')

    } else if (incomeMatchByNumber === null) {
        return alert('INCOME field acccept just a intiger number')

    } else if (foodElement === '') {
        return alert('Please fill out FOOD field!!')

    } else if (foodMatchByNumber === null) {
        return alert('FOOD field acccept just a intiger number')

    } else if (rentElement === '') {
        return alert('Please fill out RENT field!!')

    } else if (rentMatchByNumber === null) {
        return alert('RENT field acccept just a intiger number')     

    } else if (clothesElement === '') {
        return alert('Please fill out CLOTHES field!!')

    } else if (clothesMatchByNumber === null) {
        return alert('CLOTHES field acccept just a intiger number')

    }

    const updateTotalExpenses = (+foodElement) + (+rentElement) + (+clothesElement)

    if((+incomeElement) < updateTotalExpenses){
        return alert('OPPS! Your Income is POOR as like me..')
    } else {
        document.getElementById('total-expenses').innerText = updateTotalExpenses
        document.getElementById('balance').innerText = (+incomeElement) - updateTotalExpenses
    }

})

