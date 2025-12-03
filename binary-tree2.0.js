class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Building the tree with game titles

const root = new Node("Choose a game.");
root.left = new Node("Mass Effect");
root.right = new Node("Halo");

// Function  for random choice:
 function randomGameChoice(node) {
    if (!node.left || !node.right) {
        return null;
    }
    const choice = Math.random() < 0.5 ? node.left : node.right;
    return choice.value;
 }

 console.log("Randomly selected Game:", randomGameChoice(root));