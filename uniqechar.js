const uniqueChar = (str) =>{
     let un={}
     let count = 0
     for(var i of str){
        un[i] = un[i] + 1 || 1
     }
     console.log(Object.values(un));
     for(let i in un){
        console.log(un[i]);
        if(un[i] !== 1){
            console.log("not Unique");
            break
        }
        console.log("unique");
     }
    //  for(var i = 0; i<str.length;i++){
    //     if(Object.values(un) !== 1){
    //         console.log("not unique");
    //     }else{
    //         console.log("unique")
    //     }
    //  }
}
// uniqueChar("abcd")
uniqueChar("abebe")