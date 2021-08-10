function inOrder (currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }

    console.log(currentNode.data);
    
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

function findOrAdd (rootNode, newNode) {
    if (rootNode.data == newNode.data) {
        return true;
    }

    if (newNode.data < rootNode.data) {
        if (!rootNode.left) {
            return rootNode.left = newNode
        } else {
            return findOrAdd(rootNode.left, newNode)
        }
    } else {
        if (!rootNode.right) {
            return rootNode.right = newNode
        } else {
            return findOrAdd(rootNode.right, newNode)
        }
    }
}

function max (currentNode) {
    if (!currentNode.right) {
        return currentNode
    } else {
        return max(currentNode.right)
    }
}

function min (currentNode) {
    if (!currentNode.left) {
        return currentNode
    } else {
        return min(currentNode.left)
    }
}