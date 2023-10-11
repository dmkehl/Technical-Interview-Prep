import "jasmine";

import SuffixTree, { Node } from '../suffixtree'


describe('Node', () => {

    describe('retrieval', () => {
        // partial suffix tree for "bumble bummed bummer"
        const root = new Node(null, -1)
        const parent = new Node('bum')
        root.addChild(parent)
        let child1 = new Node("ble")
        child1.addChild(new Node(null, 0))
        parent.addChild(child1)
        let child2 = new Node("me")

        let grandchild1 = new Node("d")
        grandchild1.addChild(new Node(null, 7))
        child2.addChild(grandchild1)
        
        let grandchild2 = new Node("r")
        grandchild2.addChild(new Node(null, 14))
        child2.addChild(grandchild2)
        parent.addChild(child2)
    
        it('fetches the correct child', () => {
            // return node for exact string match
            let fetched = parent.getChildFor('m')[0]
            expect(typeof(fetched)).toEqual('object')
            expect(fetched.value).toEqual("me")
        })
    
        it('returns empty array for a child that does not exist', () => {
            const doesNotExist = parent.getChildFor('mming')
            expect(doesNotExist).toEqual([])
        })

        it('returns all index children', () => {
            let indexChildren = parent.getIndexChildren()
            expect(indexChildren.length).toEqual(0)

            let suffixChildren = parent.getSuffixChildren()
            expect(suffixChildren.length).toEqual(2)

            let indexes = parent.getAllIndexChildren().map((node: Node) => {
                return node.index
            })
            expect(indexes).toEqual([0,7,14])
        })
    })
})


describe('SuffixTree', () => {
    it('initializes a suffix tree object', () => {
        const tree = new SuffixTree("yolopolo")

        expect(tree.indexesOf('olo')).toEqual([1,5])

        expect(tree.indexesOf("hell")).toEqual([])

    });

    it('initializes a one-char tree', () => {
        const tree = new SuffixTree("o");
        console.log(tree.root.children)
        console.log(tree.root.children[0].children)
        console.log(tree.root.getAllIndexChildren())
    })
});