const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function addNode(node, newNode) {
      newNode.data < node.data
        ? node.left === null
          ? node.left = newNode
          : addNode(node.left, newNode)
        : node.right === null
          ? node.right = newNode
          : addNode(node.right, newNode)
    }
    if (!data) this.root()
    else {
      let newNode = new Node(data);
      if (this.rootNode === null) {
        this.rootNode = newNode;
      } else {
        addNode(this.rootNode, newNode);
      }
      return this.rootNode;
    }
  }

  has(data) {
    if (this.find(data)) return true
    else return false;
  }

  find(data) {
    let res;
    function findNode(node, data) {
      console.log('find');
      if (node === null) {
        res = null;
        return null;
      }
      if (data < node.data)
        findNode(node.left, data)
      else
        if (data > node.data)
          findNode(node.right, data)
        else {
          console.log(node.data);
          res = node;
          return node;
        }
    }
    findNode(this.rootNode, data);
    return res;
  }

  removeNode(root, data) {
    if (root === null) {
      return null;
    } else if (data < root.data) {
      root.left = this.removeNode(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.removeNode(root.right, data);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }

      if (root.right === null) {
        root = root.left;
        return root;
      } else if (root.left === null) {
        root = root.right;
        return root;
      }
      function min(node) {
        if (node.left === null) {
          return node;
        }
        else return min(node.left)
      }

      root.data = min(root.right).data;
      root.right = this.removeNode(root.right, min(root.right).data);
      return root;
    }
  }

  remove(data) {
    this.removeNode(this.rootNode, data);
  }

  min() {
    let res;
    function min(node) {
      if (node.left === null) {
        res = node;
      }
      else min(node.left)
    }
    min(this.rootNode);
    return res.data;
  }

  max() {
    let res;
    function max(node) {
      if (node.right === null) {
        res = node;
      }
      else max(node.right)
    }
    max(this.rootNode);
    return res.data;
  }
}

const BST = new BinarySearchTree();
BST.add(5);
//BST.add(11);
//BST.add(25);
BST.add(16);
BST.add(7);
BST.add(2);
console.log(BST.find(16));

module.exports = {
  BinarySearchTree
};