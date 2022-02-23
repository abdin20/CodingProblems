/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

    //check for root being null
    if (root === null) return 0;

    //recursive helper function
    var recursiveDepth = function (tree, count) {
        //base case when leaf =null

        //return the running count -1 since this leaf is null
        if (tree == null) return count - 1;
        
        return Math.max(recursiveDepth(tree.left, count + 1), recursiveDepth(tree.right, count + 1))

    }



    return (recursiveDepth(root, 1))

};