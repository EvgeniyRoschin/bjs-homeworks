"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
  let d = b** - 4 * a * c;
  let x = [];
  let calculateX;
  let calculateX1;
  let calculateX2;

  if (d < 0) {
      x[0] = "корней нет";
  }
  else if (d == 0) {
      calculateX = (-b) / (2 * a);
      x[0] = calculateX;
  } 
  else if (d > 0) {
      calculateX1 = ((-b) - Math.sqrt(d)) / (2 * a);
      calculateX2 = ((-b) + Math.sqrt(d)) / (2 * a);
      x = [calculateX1, calculateX2];
  }
  return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        marks.splice(5);
        console.log("Введено более 5 оценок");
    }

    let averageCalculate = 0;

    for(let i = 0; i < marks.length; i++) {
        averageCalculate += marks[i];
    }

    averageCalculate = averageCalculate / marks.length;
    return averageCalculate;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let today = new Date();
    let todayYear = today.getFullYear();
    let age = todayYear - yearOfBirthday;
    let result;

    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}`;
    } 
    else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    console.log(result);
    return result;
}