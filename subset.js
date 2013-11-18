//Write a function that determined if all of the values of one
//subset are contained within a given set

var isSubset = function (subset,set){
	var truth = 0;
	var len = 0;
	for (var i = 0; i <= subset.length-1; i++){
		len += 1
		for (var j = 0; j <= subset.length-1; j++){
			if (subset[i] === set[j]){
				truth += 1;
				break;
			}				
		};
	};
	if (len === truth){
		return true;
	} else {
		return false;
	} 
}
