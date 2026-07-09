/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let length = mountainArr.length();
        let l = 1, r = length - 2, peak=0;

        //Find peak
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            let a = mountainArr.get(m - 1);
            let b = mountainArr.get(m);
            let c = mountainArr.get(m + 1);
            if (a < b && b < c) {
                l = m + 1;
            } else if (a > b && b > c) {
                r = m - 1;
            } else {
                peak = m;
                break;
            }
        }

        //Seach left sorted array
        l = 0, r = peak -1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            let mid = mountainArr.get(m)
            if (mid == target) {
                return m;
            } else if (mid > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        l = peak , r = length - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            let mid = mountainArr.get(m)
            if (mid == target) {
                return m;
            } else if (mid > target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return -1;
    }
}
