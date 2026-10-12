var convert = function (s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s
    let output = ""
    let pattern = []
    for (let i = 0; i < numRows; i++) pattern.push("")

    // creating zigzag
    let pos = 0
    let row = 0
    let down = true
    while (pos < s.length) {
        pattern[row] += s[pos]
        pos++

        if (row === numRows - 1) {
            down = false
        }
        else if (row === 0) {
            down = true
        }
        if (down) row++
        else row--
    }
    //adding all strings
    for (let i = 0; i < numRows; i++) output += pattern[i]
    return output

};

console.log(convert("PAYPALISHIRING", 3))