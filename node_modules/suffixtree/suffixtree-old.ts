type Children = {
    [key: string]: Node
}

type NodeKey = {
    node: Node,
    substring: string
}

export class Node {
    children: Children = {}

    constructor(public value?: number) {}

    addChild(key: string, node: Node) {
        this.children[key] = node
    }

    getChildFor(substring: string): NodeKey | null {
        // start with full passed substring, remove end chars one by one
        for (let i = substring.length-1; i >= 0; i--){
            let prefix = substring.slice(i, substring.length)
            // return node if child edge has exact substring match
            if (prefix in this.children ){
                return {
                    node: this.children[prefix],
                    substring: prefix
                }
            }
            // return node if child edge starts with substring
            for (let key in this.children){
                if (key.startsWith(prefix)) {
                    return {
                        node: this.children[key],
                        substring: key
                    }
                }
            }
        }
        return null
    }
}

export default class SuffixTree {
    root: Node

    constructor(input: string){
        this.root = new Node(-1)

        this._build(input)
    }

    indexesOf(input: string): number[] {
        return []
    }

    contains(substring: string): boolean {
        return false
    }

    _build(input: string) {
        for (let i = input.length-1; i >= 0; i--){
            this._addNodeFor(input.slice(i, input.length), i)
        }
    }

    _getLeafFor(substring: string): NodeKey {
        console.log(`Crawling tree to get leaf node for: ${substring}`)
        let currentNode = this.root
        let childNode = currentNode.getChildFor(substring)
        while (childNode) {
            let matchingLength = childNode.substring.length
            if (substring.length === matchingLength) {
                currentNode = childNode.node
                childNode = null
                substring = ""
            } else {
                substring = substring.slice(matchingLength, substring.length)
                currentNode = childNode.node
                childNode = currentNode.getChildFor(substring)
            }
        }

        return {
            node: currentNode,
            substring: substring
        }

    }

    _addNodeFor(substring: string, index: number) {
        let leafNode = this._getLeafFor(substring)

        let indexNode = new Node(index)

        if (substring.length > 0){
            let newNode = new Node()
            newNode.addChild('random', indexNode)
            newNode.addChild(substring, indexNode)
        } else {
            
            leafNode.node.addChild(substring, new Node(index))
        }
    }

}