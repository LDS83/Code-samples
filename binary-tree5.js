class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
      if(!this.root) {
        this.root = newNode;
        return;
      }
    
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
  
  // In Order Traversal (Left- Root, Right)
  traverseInOrder(node = this.root) {
    if (!node) return;
    this.traverseInOrder(node.left);
    console.log(node.value);
    this.traverseInOrder(node.right)
  }
}// End of Binary Tree
// Example Usage here:

const tree = new BinaryTree();
tree.insert(11);
tree.insert(34);
tree.insert(90);
tree.insert(45);

tree.traverseInOrder()