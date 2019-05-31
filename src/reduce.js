
export function reduce(arr,fn,cur) {
	var sum = cur || 0;
	for(var i=0; i<arr.length; i++){
		sum = fn(sum,arr[i],i,arr);
	}
	return sum;
}
