/*
 * @lc app=leetcode.cn id=530 lang=typescript
 * @lcpr version=30201
 *
 * [530] 二叉搜索树的最小绝对差
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

function getMinimumDifference(root: TreeNode | null): number {
    let minDiff = Number.MAX_VALUE;
    let prev: TreeNode | null = null;
    function getDiff(node: TreeNode) {
        if (node === null) {
            return;
        }
        getDiff(node.left);
        // 中序遍历获取升序的节点值序列
        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev.val);
        }
        prev = node;
        getDiff(node.right);
    }
    getDiff(root);
    return minDiff;
}
// @lc code=end

/*
// @lcpr case=start
// [4,2,6,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,48,null,null,12,49]\n
// @lcpr case=end

 */
