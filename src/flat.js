var isArray = Array.isArray
export function flat(arr) {
	var tmp = [];
	arr.forEach((i,a)=>{
		if(isArray(i)){
			if(i.length){
				if(i.length == 1){
					tmp = isArray(i[0]) ? tmp.concat(i[0]) : tmp.concat(i);
				} else {
					tmp = tmp.concat(flat(i));
				}
			}
		}else{
			tmp.push(i);
		}
	})
	return tmp;
}
