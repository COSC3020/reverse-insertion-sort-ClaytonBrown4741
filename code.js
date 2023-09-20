function insertionSortReverse(array) {
	for(var i = array.length-1; i >= 0; i--) {
    		var val = array[i];
    		var j;
    		for(j = i; j < array.length && array[j+1] < val; j++) {
      			array[j] = array[j+1];
			//console.log(array)
    		}
    	array[j] = val;
  	}	
return array;
}


//console.log(insertionSortReverse([5,7,9,4,3,1,2]))
