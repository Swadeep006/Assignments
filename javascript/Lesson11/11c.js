arraySwap([1,20,22,24,5]);
arraySwap(['hi','hello','good']);
function arraySwap(array){
    let temp = array[0];
    array[0] = array[array.length -1];
    array[array.length-1] = temp;
    console.log(array);
}