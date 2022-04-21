var seqArray= [4,2.5,1,-0.5, -2, -3.5]

// Sequence
function sequence(array){
    for (i=0;i<array.length;i++){
        console.log(array[i]); 
    }
}

//Sigma
function sigma() {
    var result = 1;
    for (i=1;i<=100;i++){
        result = result + i;
    }
    return result;
}

function factorial(){
    var result = 1;
    for (i=1;i<=12;i++){
        result = i * result;
    }
    console.log(result)
}
sequence(seqArray)
var fact =factorial()
console.log(sigma())
