const fuziBuzz = (num) =>{
    for(i = 1; i <= num; i++){
        if(i % 3 === 0){
            console.log("fuzi")
        }else if(i%5 === 0 ){
            console.log("buzzi");
        } else if(i%3 === 0 && i%5 === 0){
            console.log("fuziBuzz");
        }else{
            console.log(i);
        }
    }
}
fuziBuzz(20)