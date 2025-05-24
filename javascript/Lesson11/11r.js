function removeEgg(foods){
    let foods1 = [];
    for(let i=0;i<foods.length;i++){
        if(foods[i]==="egg"){
            continue;
        }
        foods1.push(foods[i]);
    }
    return foods1;
}
console.log(removeEgg(["egg","help","gnanesh"]));