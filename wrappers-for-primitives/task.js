'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let percentNum = Number(percent);
    let contributionNum = Number(contribution);
    let amountNum = Number(amount);
    date = new Date(date);
    
    if (isNaN(percentNum)) {
        console.log(`Параметр ПРОЦЕНТ содержит неправильное значение ${percent}`);
    } 
    if (isNaN(contributionNum)) {
        console.log(`Параметр НАЧАЛЬНЫЙ ВЗНОС содержит неправильное значение ${contribution}`);
    }
    if (isNaN(amountNum)) {
        console.log(`Параметр ОБЩАЯ СТОИМОСТЬ содержит неправильное значение ${amount}`);
    }
    
    let currentDate = new Date();
    let monthOfCredit;

    if (currentDate.getFullYear() == date.getFullYear()) {
        monthOfCredit = date.getMonth() - currentDate.getMonth();
    }
    if (date.getFullYear() == currentDate.getFullYear() + 1) {
        monthOfCredit = (11 - currentDate.getMonth()) + date.getMonth();
    } 
    if (date.getFullYear() > currentDate.getFullYear() + 1) {
        monthOfCredit = (11 - currentDate.getMonth()) + date.getMonth() + (date.getFullYear() - currentDate.getFullYear() - 1) * 12;
    }
    // console.log(monthOfCredit);

    let sumOfCredit = amount - contribution;
    // console.log(sumOfCredit);

    let monthlyPayment = sumOfCredit * ((percentNum / 12) + (percentNum / 12) /(Math.pow((1 + (percentNum / 12)), monthOfCredit)-1));
    // console.log(monthlyPayment);
    
    let totalAmount = monthlyPayment * monthOfCredit;

    console.log(totalAmount);

    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting;
    
    if (name.length === 0) { //ничего другого здесь не смог придумать, если ничего не ввели, то аноним, а проверку на null и undefined у меня не получается сделать, также я не понимаю как эти значения могут прийти из input
        greeting = `Привет, мир! Меня зовут Аноним`;
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`;
    }

    console.log(greeting);

    return greeting;
}