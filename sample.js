function positivenumbers(numbers)
{
    var posNumCt=0;
    console.log(numbers.length)
   
    for(i=0;i<numbers.length; i++){
        console.log(numbers[i])
        if (numbers[i] >=0){
            posNumCt = posNumCt+1;
            console.log(posNumCt)
        }
    }
    return posNumCt;
}

var nums=[-1,2,-3,4,33,-9];
console.log(positivenumbers(nums));