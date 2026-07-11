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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0;

        function diam(root){
            if(!root) return 0;

            let left = diam(root.left);
            let right = diam(root.right);

            res = Math.max(res, left+right);

            return 1 + Math.max(left,right);
        }

        diam(root);

        return res;
    }
}
