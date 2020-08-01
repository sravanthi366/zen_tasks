let array = [2,4,3,5,6]
let newArray=[];
	for(i in array){
		let flag = false;
		if(array[i]>2){
		for(let j=2; j< array[i];j++){
			if(array[i]%j===0){
				flag= true;
			}
		}
		if(!flag){
			newArray.push(array[i]);
		}
	}

	}
  

console.log(newArray);
