function Search(search){
    let k = -1;
    for(let i=0;i<search.length;i++){
        if(search[i]==="search"){
            k = i;  
        }
    }
    return k;
}
console.log(Search(["abc","laugh"]));
console.log(Search(["search","laugh","search"]));
console.log(Search(["search","abc","laugh"]));