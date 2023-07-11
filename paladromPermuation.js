const paladromPermuation = (str) =>{
    // let m = str.trim()
    let m = str.replaceAll(" ", "")
    console.log(m);
    let s = m.split("")
    console.log(s);
    let l = {}
    let co = 0
    for( let char of s){
        l[char] = l[char] + 1 || 1
        co = co + 1
    }
    if(str.length % 2 === 1){
        return "No"
    }
    for(var i of l){
        console.log("mengistu", i);
        if(i % 2 === 0 ){
            return "yes"
        }else{
            return "No"
        }
    }
    // if(co % 2 === 0){
    //     return "yes"
    // }else{
    //     return "No"
    // }

}
// str = "tact coa"
// str = "toppot"
str = "PUIPIP"
console.log({
    paldPermutaion: paladromPermuation(str)
});