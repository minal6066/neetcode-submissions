/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {

        function bal(root){
            if(!root) return [true,0];
            
            let left = bal(root.left);
            let right = bal(root.right);

            let balanced = left[0] && right[0] && (Math.abs(left[1]-right[1])<=1)

            return [balanced, 1 + Math.max(left[1],right[1])];
        }

        let b = bal(root);
        return b[0];
        
    }
}
