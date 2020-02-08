
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
    var head = 1;
    var tail = 0;
    var dedupe = [];
    for(let i = 1 ; i < arr.length ; i++){
        head = i;
        if(arr[head] == arr[tail]){
            continue;
        }else{
            dedupe.push(arr[tail]);
            tail = head;
        }
    }
    return dedupe;
}

// var test = [0,1,2,2,3,4,4,4,4,4,5]
// var x = removeDupes(test)
// console.log(x)
//[0,1,2,2,3]
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

// var test = [2,3,-1,4,5,6,7,0,9]
// var x = minToFront(test);
// console.log(x)

reverse = (arr) =>{
    
    for( let i = 0 ; i < (arr.length)/2 ; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// var test = [0,1,2,3,4,5,6,7,8,9]
// console.log(reverse(test));

rotateArr = (arr, shiftBy) => {
    var isRightShift = true;
    if(shiftBy < 0 ){
        isRightShift = false;
    }
    if(Math.abs(shiftBy) > arr.length){
        shiftBy = shiftBy % arr.length
    }
    for(let i = 0 ; i < Math.abs(shiftBy) ; i++){
        if(isRightShift){
            var lastVal = arr[arr.length-1];
            for(let j = arr.length - 1; j > 0 ; j--){
                arr[j] = arr[j-1];
            }
            arr[0] = lastVal;
        }else{
            var lastVal = arr[0];
            for(let j = 0; j < arr.length - 1 ; j++){
                arr[j] = arr[j+1]
            }
            arr[arr.length-1] = lastVal;
        }
    }

    return arr
    
}

console.log(rotateArr([0,1,2],-10))