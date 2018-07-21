/**
 * 无重复字符的最长子串(medium)
 * 如何将窗口思维实现，得到更好的性能来实现
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var length = s.length
    var start = 0
    var tempStr = ''
    var maxLength = 0
    if (length < 2) {
        return length
    }
    for(var end = 1; end < length; end++){
        tempStr = s.substring(start, end)
        var position = tempStr.indexOf(s[end])
        if (position >= 0) {
            start = position + 1 + start
        }
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1
        }
    }
    return maxLength
};