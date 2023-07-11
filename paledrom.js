const palFun = (str)=>{
    let arr = str.split("")
    let rev = arr.reverse()
    res = arr.join("")
    // console.log(res)

    if(str === res){
        // return "true"
        console.log("True")
    }else{
        // return "false"
        console.log("false")
    }
}

palFun("abebe")