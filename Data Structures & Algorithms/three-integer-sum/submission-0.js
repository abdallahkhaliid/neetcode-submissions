class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const n = nums.length;
    const seen = new Set();
    const res = [];

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {

          if (nums[i] + nums[j] + nums[k] === 0) {

            // normalize order so duplicates match
            const triplet = [nums[i], nums[j], nums[k]]
              .sort((a, b) => a - b);

            const key = triplet.join(",");

            if (!seen.has(key)) {
              seen.add(key);
              res.push(triplet);
            }
          }
        }
      }
    }

    return res;
  }
}