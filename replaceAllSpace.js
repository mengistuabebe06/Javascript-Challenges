const replaceAllSpace = (str, charcter) =>{
    let res = ""
    for(var i =0; i < str.length; i++){
        // console.log(str[i]);
        if(str[i] === " "){
            res += charcter
        }else{
            res += str[i]
        }
    }
    // console.log(res);
    return res
}
str = "mengistu abebe"
charcter = "%20"
console.log({
    replace: replaceAllSpace(str,charcter)
});