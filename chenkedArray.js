const chenkedArray = (arr,n) =>{
    // let mul = [n][n]
    let res = []
    // for(var i = 0; i < n; i++){
    //     for(var j = 0; j < n; j++){
    //         mul[i][j] = arr[j]
    //     }
    // }
    // console.log(mul)
    for(var i = 0; i< arr.length; i=i+n){
       res.push(arr.slice(i,n+i))
    }
    console.log(res);
}

let a = [1,4,5,21,44,-9,0]
chenkedArray(a,3)