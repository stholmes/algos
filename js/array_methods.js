
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

swapPairs = (arr) =>{
    if(arr.length % 2 == 0){
        var length = arr.length;
    }else{
        var length = arr.length-1;
    }
    for(let i = 0 ; i < length - 1; i+=2){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

removeDuplicates = (arr)=>{
    let dupeList = [];
    dupeList.push(arr[0])
    for(let i = 1 ; i < arr.length; i++){
        for(let j = 0 ; j < dupeList.length; j++){
            if(arr[i] == dupeList[j]){
                break;
            }else if(j == dupeList.length -1){
                dupeList.push(arr[i])
            }
        }
            
    }
    return dupeList;
}

// var duplicates = [0,0,1,2,2,3,3,3,2,2,4,5,6,0];
// var x = removeDuplicates(duplicates);
// console.log(x)

//Without a nested for loop
removeDupes = (arr)=>{

}

minToFront = (arr) =>{
    var min = arr[0];
    var minIndex = 0
    for(let i = 0 ; i < arr.length ; i ++){
        if(min > arr[i]){
            min = arr[i];
            minIndex = i;
        }
    }
    for(let i =minIndex; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = min;
    return arr;
}

var test = [2,3,-1,4,5,6,7,0,9]
var x = minToFront(test);
console.log(x)