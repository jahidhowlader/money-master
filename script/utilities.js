var regex = /^[0-9]+$/;

document.getElementById('calculate-btn').addEventListener('click', function () {

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

    if ((+incomeElement) < updateTotalExpenses) {
        return alert('OPPS! Your Income is POOR as like me..')
    } else {
        document.getElementById('total-expenses').innerText = updateTotalExpenses
        document.getElementById('balance').innerText = (+incomeElement) - updateTotalExpenses
    }

})

document.getElementById('savings-btn').addEventListener('click', function () {
    const incomefield = document.getElementById('income').value
    const savingsField = document.getElementById('savings').value
    const balanceField = document.getElementById('balance').innerText
    const savingsAmmountField = document.getElementById('savings-ammount')
    const remainingBalanceField = document.getElementById('remaining-balance')

    const incomeFieldMatchByNumber = incomefield.match(regex)
    const savingsFieldMatchByNumber = savingsField.match(regex)

    if (incomefield === '') {
        return alert('Your INCOME Field is Required')

    } else if ((+incomefield) < 1) {
        return alert('your INCOME must gratter than 0')

    } else if (incomeFieldMatchByNumber === null) {
        return alert('INCOME field acccept just a intiger number')

    } else if (savingsField === '') {
        return alert('Your SAVINGS Field is Required')
    } else if ((+savingsField) < 1) {
        return alert('your SAVINGS must gratter than 0')

    } else if (savingsFieldMatchByNumber === null) {
        return alert('SAVINGS field acccept just a intiger number')

    } else if (savingsField > 100) {
        return alert('It is not possible gretter then 100')

    } else {
        const savings = incomefield * (.01 * savingsField)

        if(savings > (+balanceField)){
            return alert(`you can't savings gratter then balance`)
        }

        savingsAmmountField.innerText = savings.toFixed(0)
        remainingBalanceField.innerText = (+balanceField) - savings
    }

})