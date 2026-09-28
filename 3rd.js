var lengthOfLongestSubstring = function(s) {
    let chars = new Set()
    let start = 0
    let maxLen = 0

    for (let end = 0; end < s.length; end++) {
        while (chars.has(s[end])) {
            chars.delete(s[start])
            start++
        }

        chars.add(s[end])
        maxLen = Math.max(maxLen, end - start + 1)
    }

    return maxLen
};


let s = ""
console.log(lengthOfLongestSubstring(s))