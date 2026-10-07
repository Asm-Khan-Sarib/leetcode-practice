var longestPalindrome = function(s) {
    if (s.length < 2) return s

    let maxPal = s[0]

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--
            right++
        }

        return s.slice(left + 1, right)
    }

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i)
        let even = expand(i, i + 1)

        if (odd.length > maxPal.length) {
            maxPal = odd
        }

        if (even.length > maxPal.length) {
            maxPal = even
        }
    }

    return maxPal
}
console.log(longestPalindrome("aaaaa"))