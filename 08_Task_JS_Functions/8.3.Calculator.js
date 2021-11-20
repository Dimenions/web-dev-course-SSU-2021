var error = "Ошибка! Не правильное значение!";

function zero(example = '')
{
	if(example === error) return error;
	return calculate(example, 0);
}

function one(example = '')
{
	if(example === error) return error;
	return calculate(example, 1);
}

function two(example = '')
{
	if(example === error) return error;
	return calculate(example, 2);
}

function three(example = '')
{
	if(example === error) return error;
	return calculate(example, 3);
}

function four(example = '')
{
	if(example === error) return error;
	return calculate(example, 4);
}

function five(example = '')
{
	if(example === error) return error;
	return calculate(example, 5);
}

function six(example = '')
{
    if(example === error) return error;
	return calculate(example, 6);
}

function seven(example = '')
{
	if(example === error) return error;
	return calculate(example, 7);
}

function eight(example = '')
{
    if(example === error) return error;
	return calculate(example, 8);
}

function nine(example = '')
{
    if(example === error) return error;
	return calculate(example, 9);
}

function plus(example = '')
{
	return operator(example, '+');
}

function minus(example)
{
	return operator(example, '-');
}

function times(example)
{
	return operator(example, '*');
}

function dividedBy(example)
{
    return operator(example, '/');
}

function operator(example, isOperator) 
{
    if(example === error) return error;
	if(ExactlyOperator(example[0])) 
    {
		return error;
	}
    else 
    {
		return isOperator + example;
	}
}

function ExactlyOperator(operator)
{
	if(operator == "+" || operator == "-" || operator == "*" || operator == "/") 
    {
		return true;
	}
	return false;
}

function calculate(second, first, operator)
{
	if(operator == "+") 
    {
		return (first + second).toString();
	}
    else if(operator == "-") 
    {
		return (first - second).toString();
	}
    else if (operator == "*") 
    {
		return (first * second).toString();
	}
    else if (operator == "/") 
    {
		if (first/second === Number.POSITIVE_INFINITY)
        {
			return (Number.POSITIVE_INFINITY).toString();
		}
		return parseInt((first / second)).toString();
	}
    else 
    {
		return error;
	}
}

function calculate(example, number)
{
	if(ExactlyOperator(example[0])) 
    {
		let splited = example.split(/\+|\-|\*|\//);
		return calculate(Number(splited[1]), Number(number), example[0]).toString();
	}
    else 
    {
		return number.toString();
	}
}

console.log("8.3. Калькулятор")

console.log("Вводим : seven(times(five()))")
console.log(seven(times(five())))

console.log("Вводим : four(plus(nine()))")
console.log(four(plus(nine())))

console.log("Вводим : eight(minus(three()))")
console.log(eight(minus(three())))

console.log("Вводим : six(dividedBy(two()))")
console.log(six(dividedBy(two())))

console.log("Вводим : eight(dividedBy(three()))")
console.log(eight(dividedBy(three())))

console.log("Вводим : three(times(three(times(three()))))")
console.log(three(times(three(times(three())))))

console.log("Вводим : two(plus(two(times(two(minus(one()))))))")
console.log(two(plus(two(times(two(minus(one())))))))

console.log("Вводим : zero(plus(one(dividedBy(one()))))")
console.log(zero(plus(one(dividedBy(one())))))

console.log("Вводим : one(dividedBy(zero()))")
console.log(one(dividedBy(zero())))

console.log("Вводим : one()")
console.log(one())