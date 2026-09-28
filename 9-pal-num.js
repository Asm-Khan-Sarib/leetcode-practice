var isPalindrome = function(x) {
    return String(x) === String(x).split('').reverse().join('');
};

console.log(isPalindrome(10201))