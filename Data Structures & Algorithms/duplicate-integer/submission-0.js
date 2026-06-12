/**
 * 1- Args arr of nums 
 * 2 - if condtion inside a loop 
 * 3 - if loop detect number more than one retrun true 
 * 4 - if not retrun false 
 * 
 * 
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
      
        }
         
      }

    }
    return false;
  }
}
