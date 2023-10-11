export class Node {
    public children: Array<Node> = []
    constructor(public value?: string, public index?: number){}

    addChild(node: Node){
        this.children.push(node)
    }

    // given a substring, get child nodes with value
    getChildFor(character: string): Array<Node> {
        return this.getSuffixChildren().filter((node) => {
            return node.value.startsWith(character)
        })
    }

    // get all immediate child suffix node
    getSuffixChildren(): Array<Node> {
        return this.children.filter((node) => {
            return Boolean(node.value)
        })
    }

    // get all immediate child index nodes
    getIndexChildren(): Array<Node> {
        return this.children.filter((node) => {
            return !Boolean(node.value)
        })
    }

    // BFS to get all leaf nodes under node
    getAllIndexChildren(): Array<Node> {
        let suffixChildrenToCheck = []
        suffixChildrenToCheck.push(this)

        let allIndexChildren = []

        while (suffixChildrenToCheck.length > 0){
            let node = suffixChildrenToCheck[0]
            allIndexChildren = allIndexChildren.concat(node.getIndexChildren())
            suffixChildrenToCheck = suffixChildrenToCheck.concat(node.getSuffixChildren())
            suffixChildrenToCheck.shift()
        }
        return allIndexChildren

    }
}

type NodeIndex = {
    node: Node,
    index: number
}

export default class SuffixTree {
    public root: Node
    constructor(inputString: string){
        this.root = new Node(null, -1)
        this._build(inputString)
    }

    indexesOf(substring: string): Array<number> {
        let nodeIndex = this._crawl(substring)
        if (nodeIndex.index === 0){
            return []
        }
        let leafNodes = nodeIndex.node.getAllIndexChildren()
        return leafNodes.map((node: Node) => {
            return node.index
        }).sort()
    }

    contains(substring: string): boolean {
        return this.indexesOf(substring).length > 0
    }

    // recursive method that traverses the tree until reaching lowest matching
    // suffix text node
    _crawl(substring: string, trackingIndex?: number, currentNode?: Node): NodeIndex {
        if (!currentNode){
            currentNode = this.root
        }
        if (!trackingIndex){
            trackingIndex = 0
        }
        let matchingNodes = currentNode.getChildFor(substring.charAt(0))
        if (substring === "" || matchingNodes.length === 0){
            return {
                node: currentNode,
                index: trackingIndex
            }
        } else {
            let matchingNode = matchingNodes[0]
            let matching = this._maxMatching(substring, matchingNode.value)
            substring = substring.slice(matching.length, substring.length)
            return this._crawl(substring, matching.length, matchingNode)
        }
    }

    // construct the tree for all suffixes, from shortest to longest
    _build(inputString: string) {
        for (let i = inputString.length-1; i >= 0; i--){
            let currentSuffix = inputString.slice(i, inputString.length)
            console.log(currentSuffix)
            this._addNodeForSuffix(currentSuffix, i)
        }
    }

    _maxMatching(str: string, substr: string): string {
        for (let i = substr.length-1; i >= 0; i--){
            let prefix = substr.slice(i, substr.length)
            if (str.startsWith(prefix)) {
                return prefix
            }
        }
    }

    _addNodeForSuffix(suffix: string, index: number) {
        let suffixNodeIndex = this._crawl(suffix)
        if (suffixNodeIndex.index+1 < suffix.length){
            suffix = suffix.slice(suffixNodeIndex.index, suffix.length)
        }
        let nodeForSuffix = new Node(suffix)
        nodeForSuffix.addChild(new Node(null, index))
        suffixNodeIndex.node.addChild(nodeForSuffix)
    }
}