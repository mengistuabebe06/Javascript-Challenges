const isPermutation = (str1,str2) =>{
    let s1= str1.length
    let s2 = str2.length
    let co = 0
    if(s1 !== s2){
        return false
    }
    let a = str1.split("")
    let b = str2.split("")
    // console.log(a);
    let c = a.sort()
    // console.log(c);
    let d = b.sort()
    // console.log(d);
    // if(c === d){
    //     console.log("is permutaion");
    // }
    // console.log("not");
    for(let i=0; i< str1.length; i++){
        if(c[i] === d[i]){
          co = co + 1
        }else{
            co = 0
        }
    }
    if(co === s1){
        return true
    }else{
        return false
    }
}
s1 = "abcde"
s2 = "abcd"
console.log({
    isPermutation: isPermutation(s1,s2)
});