let name = ('Alex')
let accountNumber = 7777
let money = 10000



let userName = prompt('Как вас зовут?');
if (userName === 'Alex') {
    let account = prompt('Номер счета:');
    if (account === '7777') {
        let getMoney = prompt('Сколько обналичить:')
        if (getMoney <= money) {
            alert('Всё отлично')
            console.log(getMoney)
            console.log(money - getMoney)
        } else {
            alert('Ошибка: Недостаточна средсв!')
        }
    } else {
        alert('Пользователь не найден, досвидули')
}
} else {
    alert ('Пользователь не найден, досвидули')
}

