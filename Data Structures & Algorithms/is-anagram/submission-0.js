class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const sortedS = s.toLowerCase().split("").sort().join("");
    const sortedT = t.toLowerCase().split("").sort().join("");

    return sortedS === sortedT;
  }
}