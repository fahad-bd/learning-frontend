function largestElement(array){
    let m = array[0];
    for(var i = 0;i<array.length;i++){
        if(m<array[i])m=array[i];
    }
    console.log(m);
}

var a = [1,2,3,4,5,6,6,7];
largestElement(a);