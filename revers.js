// const revString  = (str) =>{
//     const arr = str.split("")
//     arr.reverse()
//     console.log(arr)
//     st = arr.join("")
//     console.log(st)
// }
// revString("mengistu")

const newfun = (str) =>{
    let rev = ''
    for(i = str.length -1; i >= 0; i --){
        rev = rev+str[i]
    }
    // for(let cha of str){
    //     rev = cha + rev
    // }
    console.log(
        {val: rev}
        )
}
newfun("abebe")
