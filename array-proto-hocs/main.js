function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every(isEqual);
               
        function isEqual ( number ) {
            let index = arr1.indexOf(number);
            return number === arr2[index];
        }
    } else {
        return false;
    }
}

function memoize(fn, limit) {
	const results = [];
	return function() {
		
		let solution = results.find(item => compareArrays(item.args, Array.from(arguments)));

		if(solution) {
			console.log('Результат работы функции найден в памяти');
			return solution.result;
		} else {
			console.log('Функция вызвана не из памяти');
			if(results.length === limit) {
				results.shift();
			}
			let ex = fn(...arguments);
			results.push({
				args: Array.from(arguments),
				result: ex,
			});

			return ex;
		}
	} 
}

const sum = (a, b) => a + b;

const mSum = memoize(sum, 2); 
