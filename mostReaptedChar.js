const mostRepeatedChar = (str)=>{
    let dic = {}
    let count = 0
    let maxChar = []
    for(i = 0; i < str.length; i++){
        let char = str[i]
        dic[char] = dic[char] + 1 || 1
        if(dic[char] > count){
            count = dic[char]
            maxChar = [char]
        }else if(dic[char] === count){
            maxChar.push(count)
        }
    }
    console.log(dic) 
}
mostRepeatedChar("abebe")