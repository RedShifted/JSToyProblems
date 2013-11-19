//write a function that take a multidimensional array 
//and returns a flattened version
//[1,[2,3],[4,[5,6]]] -> [1,2,3,4,5,6]

var flatten = function(input){
	var output = [];
	for (var i = 0; i < input.length; i++) {
		if (Array.isArray(input[i])){
			output.push.apply(output,flatten(input[i]));
		} else{
			output.push(input[i]);
		}
	};
	return output;
}