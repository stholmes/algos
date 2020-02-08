
let testArr = [0,1,2,3,4,5]

//Push Front

pushFront =(arr, val) =>{
    arr.push(null);
    for(let i = arr.length-1; i !=0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}

popFront = (arr) =>{
    let returnVal = arr[0];
    for(let i = 0; i < arr.length-1; i++){
        arr[i]= arr[i+1];
    }
    arr.pop();
    return returnVal;
}

// let x= popFront(testArr);
// console.log(x)
// console.log(testArr)


insertAt = (arr, index, val) =>{
    arr.push(val);
    for(let i = arr.length-1;i>index;i--){
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}
// let x = insertAt(testArr,1,8);
// console.log(x)

removeAt = (arr,index)=>{
    let returnVal = arr[index];
    for(let i = index; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return returnVal;
}
