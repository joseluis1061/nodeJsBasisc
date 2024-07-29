export function sum(a,b){
    return a + b;
}

export function rest(a,b){
    return a - b;
}

export function mul(a,b){
    return a * b;
}

export function div(a,b){
    if(b !== 0){
       return a / b;
    }
    return null;
}