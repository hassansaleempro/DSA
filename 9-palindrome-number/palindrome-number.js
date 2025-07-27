/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const string = x.toString();
    return string === string.split('').reverse().join('');
};