function multiply(a, b) {
    let result = 0
    for(let i=0; i<Math.abs(a); i++) {
        result += Math.abs(b)
    }
    if ( a<0 && b<0 ) {
        return Math.abs(result)
    }
    if (a<0 || b<0) {
        return -result
    } 
    return result
}

function divide(a, b) {
    if(a<0 && b<0) {
        let result = multiply(a , (Math.pow(b, -1)))
        return Math.floor(result)
    }
    if(a<0 || b<0) {
        let result = multiply(a , (Math.pow(b, -1)))
        return Math.ceil(result)
    }
    let result = multiply(a , (Math.pow(b, -1)))
    return Math.floor(result)
}


function modulo(a, b){
    let Ndiv = parseInt(divide(a,b));
    let N = multiply(Ndiv, b)
    let mod = Math.abs(a - N) 
    
    if ((a < 0 && b <0) || (a < 0 && b > 0)) mod = -mod

    return mod  
}