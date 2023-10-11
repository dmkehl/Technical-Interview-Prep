"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value, index) {
        this.value = value;
        this.index = index;
        this.children = [];
    }
    Node.prototype.addChild = function (node) {
        this.children.push(node);
    };
    // given a substring, get child nodes with value
    Node.prototype.getChildFor = function (character) {
        return this.getSuffixChildren().filter(function (node) {
            return node.value.startsWith(character);
        });
    };
    // get all immediate child suffix node
    Node.prototype.getSuffixChildren = function () {
        return this.children.filter(function (node) {
            return Boolean(node.value);
        });
    };
    // get all immediate child index nodes
    Node.prototype.getIndexChildren = function () {
        return this.children.filter(function (node) {
            return !Boolean(node.value);
        });
    };
    // BFS to get all leaf nodes under node
    Node.prototype.getAllIndexChildren = function () {
        var suffixChildrenToCheck = [];
        suffixChildrenToCheck.push(this);
        var allIndexChildren = [];
        while (suffixChildrenToCheck.length > 0) {
            var node = suffixChildrenToCheck[0];
            allIndexChildren = allIndexChildren.concat(node.getIndexChildren());
            suffixChildrenToCheck = suffixChildrenToCheck.concat(node.getSuffixChildren());
            suffixChildrenToCheck.shift();
        }
        return allIndexChildren;
    };
    return Node;
}());
exports.Node = Node;
var SuffixTree = /** @class */ (function () {
    function SuffixTree(inputString) {
        this.root = new Node(null, -1);
        this._build(inputString);
    }
    SuffixTree.prototype.indexesOf = function (substring) {
        var nodeIndex = this._crawl(substring);
        if (nodeIndex.index === 0) {
            return [];
        }
        var leafNodes = nodeIndex.node.getAllIndexChildren();
        return leafNodes.map(function (node) {
            return node.index;
        }).sort();
    };
    SuffixTree.prototype.contains = function (substring) {
        return this.indexesOf(substring).length > 0;
    };
    // recursive method that traverses the tree until reaching lowest matching
    // suffix text node
    SuffixTree.prototype._crawl = function (substring, trackingIndex, currentNode) {
        if (!currentNode) {
            currentNode = this.root;
        }
        if (!trackingIndex) {
            trackingIndex = 0;
        }
        var matchingNodes = currentNode.getChildFor(substring.charAt(0));
        if (substring === "" || matchingNodes.length === 0) {
            return {
                node: currentNode,
                index: trackingIndex
            };
        }
        else {
            var matchingNode = matchingNodes[0];
            var matching = this._maxMatching(substring, matchingNode.value);
            substring = substring.slice(matching.length, substring.length);
            return this._crawl(substring, matching.length, matchingNode);
        }
    };
    // construct the tree for all suffixes, from shortest to longest
    SuffixTree.prototype._build = function (inputString) {
        for (var i = inputString.length - 1; i >= 0; i--) {
            var currentSuffix = inputString.slice(i, inputString.length);
            console.log(currentSuffix);
            this._addNodeForSuffix(currentSuffix, i);
        }
    };
    SuffixTree.prototype._maxMatching = function (str, substr) {
        for (var i = substr.length - 1; i >= 0; i--) {
            var prefix = substr.slice(i, substr.length);
            if (str.startsWith(prefix)) {
                return prefix;
            }
        }
    };
    SuffixTree.prototype._addNodeForSuffix = function (suffix, index) {
        var suffixNodeIndex = this._crawl(suffix);
        if (suffixNodeIndex.index + 1 < suffix.length) {
            suffix = suffix.slice(suffixNodeIndex.index, suffix.length);
        }
        var nodeForSuffix = new Node(suffix);
        nodeForSuffix.addChild(new Node(null, index));
        suffixNodeIndex.node.addChild(nodeForSuffix);
    };
    return SuffixTree;
}());
exports["default"] = SuffixTree;
