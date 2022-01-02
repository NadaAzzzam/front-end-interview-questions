## **Problem Solving Topics**

    1- String
    2- dynamic programming
    3- interval
    4- linked list
    5- trees
    6- Arrays

## 1- What is a Valid palindrome?

- instead of thinking of palindromes as a worda read the same backwards, think of them as words where each half mirrors each other!

- this mirror concept works for words with both even and add letters.
  for Ex: (L O L , LO OL) that's mean that is left half is a mirror of right half

**Valid palindrome psuedocode :**
Snatize input string by removing spaces, non alphanumeric chars and lower casing it.
create a left and right pointer, initaily at start and end string.
while left less than right if chars at left and right pointer are not equal, return false else return true.

    function isPalindrome(s) {
    // Snatize the s param
    // make it lowercase
    // remove spaces , _ , non alphanumeric
    s = s.toLowerCase().replace(/[\W_]/g,"")

    // GET LEFT AND RIGHT NUMBER TO MATCH IF IT EQUEl EACH OTHER

    left =0
    right= s.length-1

    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--

    }
    return true;

    }
