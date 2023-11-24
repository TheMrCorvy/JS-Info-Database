/**  
 * 
 * function fizzBuzz (n) {
// print numbers from 1 to n, each number on a new line; on each line, also print either buzz if the number is divisible by 3,5, or 7, fizz buzz if the number is n, and fizz otherwise 
}

Test case:
fizzBuzz (10)
1 fizz
2 fizz
3 buzz
4 fizz
5 buzz
6 buzz
7 buzz
8 fizz
9 buzz
10 fizzBuzz **
*/

const checkIfDivisible = (number: number, divisors: number[]) => {
	let result = false;

	divisors.map((divisor) => {
		if (number % divisor === 0) {
			result = true;
		}
	});
	return result;
};

const fizzBuzz = (iterations: number) => {
	const divideBy = [3, 5, 7];

	for (let index = 1; index <= iterations; index++) {
		//print "FizzBuzz"
		if (index == iterations) {
			console.log(index + " FizzBuzz");
			continue;
		}
		const isDivisible = checkIfDivisible(index, divideBy);

		//print "Buzz"
		if (isDivisible) {
			console.log(index + " Buzz");
			continue;
		}
		//print "Fizz"
		console.log(index + " Fizz");
	}
};

fizzBuzz(10);
