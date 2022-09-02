function romanNumberConverter (romanNumeralInput){
    const numArray = romanNumeralInput.split('');

    const decimalsArray = numArray.map(numeral =>{
        switch(numeral){
            case 'I': 
                return 1
            case 'V': 
                return 5
            case 'X': 
                return 10
            case 'L': 
                return 50
            case 'C': 
                return 100
            case 'D': 
                return 500
            case 'M': 
                return 1000
            default : 
                return 0
        }
    });

    return decimalsArray.reduceRight((accum, current, index, array) =>{
        if(current < array[index+1]){
            return accum - current;
        }else{
            return accum + current;
        }
    })
}

console.log(romanNumberConverter('XVII'))
console.log(romanNumberConverter('XVIII'))
console.log(romanNumberConverter('MDCLXVI'))