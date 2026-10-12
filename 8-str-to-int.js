var myAtoi = function (s) {
    const numbers = "0123456789"
    let result = 0
    let sign = 1
    let i = 0
    while (i < s.length && s[i] === " ") i++  //remove " "
    if (i < s.length) { // check sign
        if (s[i] === "+") {
            sign = 1
            i++
        } else if (s[i] === "-") {
            sign = -1
            i++
        }
    }

    for (; i < s.length; i++) {
        if (numbers.includes(s[i])) {
            let temp = result * 10 + numbers.indexOf(s[i])
            if (sign === 1 && temp > 2147483647) {
                result = 2147483647
                break
            }
            if (sign === -1 && temp > 2147483648) {
                result = 2147483648
                break
            }
            result = temp
        }
        else break
    }
    return result * sign
}


console.log(myAtoi("  -2147483648"))