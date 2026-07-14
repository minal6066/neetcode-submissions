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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];
        let q = new Queue();
        q.push(root);

        while(!q.isEmpty()){
            let rightside = null;
            let c = q.size();
            for(let i = 0; i < c; i++){
                let e = q.pop();
                if(e){
                    rightside = e;
                    q.push(e.left);
                    q.push(e.right);
                }
            }
             if (rightside) {
                res.push(rightside.val);
            }
        }
        return res;
    }
}
