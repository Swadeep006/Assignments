addOne([1,2,3]);
addOne([-2,-1,0,99]);
function addOne(array){
    const plusOne =[];
    for(i=0;i<array.length;i++){
        plusOne.push(array[i]+1);
    }
    console.log(plusOne);
}