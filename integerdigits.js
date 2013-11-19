//write a function that takes an integer as input 
//and returns the number of digits in that integer

var numDigits = function (int){
	var digits = 0;
	while (int >= 1){
		int = int/10;
		digits += 1;
	}
	return digits;
};