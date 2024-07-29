function sum(a,b){
    return a + b;
}

function rest(a,b){
    return a - b;
}

function mul(a,b){
    return a * b;
}

function div(a,b){
    if(b !== 0){
       return a / b;
    }
    return null;
}

module.exports = {sum, rest, div, mul};
