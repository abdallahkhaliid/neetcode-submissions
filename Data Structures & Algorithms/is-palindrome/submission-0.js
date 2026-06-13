class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const string = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reverseString = s
      .replace(/[^A-Za-z0-9]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("");

    if (string === reverseString) {
      return true;
    } else {
      return false;
    }
  }
}