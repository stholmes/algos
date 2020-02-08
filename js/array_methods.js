//Push Front

pushFront =(arr, val) =>{
    arr.push(null);
    for(let i = arr.length-1; i !=0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}


let test = [1,2,3,4,5]
console.log(pushFront(test,0))