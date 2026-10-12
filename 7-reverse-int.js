var reverse = function(x) {
    let negative=false
    if(x<0){
        negative=true
        x = x*(-1)
    }
    x = Number(String(x).split('').reverse().join(''))
    
    if(negative) x = x*(-1)
    if (x < -2147483648 || x > 2147483647) return 0
    else return x
};

console.log(reverse(1534236469))

/*
var reverse = function(x) {
    let o = x;
    let r = 0;

    
    while (o > 0 || o < 0) {
        r = r * 10 + o % 10;
        o = o > 0 ? Math.floor(o / 10) : Math.ceil(o / 10);
    }

    LIMIT = 2 ** 31;

    if (r < -2147483648 || r > 2147483648) {
        return 0;
    }

    return r;
};
*/