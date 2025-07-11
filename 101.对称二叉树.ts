/*
 * @lc app=leetcode.cn id=101 lang=typescript
 * @lcpr version=30201
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    function isMirror(left, right) {
        if (left === null && right === null) {
            return true;
        } else if (left === null || right === null) {
            return false;
        }
        return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    return isMirror(root.left, root.right);
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */
