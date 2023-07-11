function guess(){
    think = Math.random()
    console.log(think)
    var g = prompt("guess ur number ")

    while( think != g){
        if (g < think){
            g= prompt("ur guess is too low guess gain.. ")
        }
        else{
            g= prompt("ur guess is too hgih guess gain.. ")
        }
    }
    window.alert("ur guess is correct")

}