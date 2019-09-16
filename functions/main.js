// Задание 1

let a;
let b;
let c;
let D;

function getSolution(a, b, c) {
    D = b * b - 4 * a * c;
    let calculatedResults = new Object();
    let calculatedRooots = [];
    
    if (D < 0) {
        calculatedResults.D = D;
    }
    else if (D == 0) {
        let x1 = (-b) / (2 * a);
        calculatedRooots = [x1];
        calculatedResults.roots = calculatedRooots;
        calculatedResults.D = D;
    } 
    else if (D > 0) {
        x1 = ((-b) - Math.sqrt(D)) / (2 * a);
        let x2 = ((-b) + Math.sqrt(D)) / (2 * a);
        calculatedRooots = [x1, x2];
        calculatedResults.roots = calculatedRooots;
        calculatedResults.D = D;
    }

    return calculatedResults;
}

function showSolutionMessage(a, b, c) {
    let result = getSolution (a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${D}`);

    if (D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    else if (D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
    } 
    else if (D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }

}

// Задание 2

function getAverageScore( data ) {
    function calculatingItemAverage(arr) {
        let scoreSum = 0;
        for (let i = 0; i < arr.length; i++) {
            scoreSum = scoreSum + arr[i];
        }

        return (scoreSum / arr.length);
    }

    let resultAverageScore = new Object();
    let totalAverageScore;

    for (let prop in data) {
        let value = calculatingItemAverage(data[ prop ]);  //ошибка видимо здесь, по моему замыслу здесь в функцию должен приходить массив, функция работает корректно из массива считает среднее
        resultAverageScore[ prop ] = value;
        totalAverageScore = totalAverageScore + value;
    }

    totalAverageScore = totalAverageScore / data.length;
    resultAverageScore.average = totalAverageScore;

    return resultAverageScore;
}

// Задание 3

function getPersonData( secretData ) {
    function numbersToNames(n) {
        let resultName;
        if (n == 0) {
            resultName = 'Родриго';
        } 
        else {
            resultName = 'Эмильо';
        }

        return resultName;
    }

    let personData = new Object();

    personData.firstName = numbersToNames(secretData.aaa);
    personData.lastName = numbersToNames(secretData.bbb);

    return personData;
}