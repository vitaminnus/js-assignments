
/** ******************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield        *
 *                                                                                          *
 ****************************************************************************************** */


/**
 * Returns the lines sequence of "99 Bottles of Beer" song:
 *
 *  '99 bottles of beer on the wall, 99 bottles of beer.'
 *  'Take one down and pass it around, 98 bottles of beer on the wall.'
 *  '98 bottles of beer on the wall, 98 bottles of beer.'
 *  'Take one down and pass it around, 97 bottles of beer on the wall.'
 *  ...
 *  '1 bottle of beer on the wall, 1 bottle of beer.'
 *  'Take one down and pass it around, no more bottles of beer on the wall.'
 *  'No more bottles of beer on the wall, no more bottles of beer.'
 *  'Go to the store and buy some more, 99 bottles of beer on the wall.'
 *
 * See the full text at
 * http://99-bottles-of-beer.net/lyrics.html
 *
 * NOTE: Please try to complete this task faster then original song finished:
 * https://www.youtube.com/watch?v=Z7bmyjxJuVY   :)
 *
 *
 * @return {Iterable.<string>}
 *
 */
export function* get99BottlesOfBeer() {
  for (let i = 99; i >= 0; i--) {
    if (i === 1) {
      yield `${i} bottle of beer on the wall, ${i} bottle of beer.`;
      yield `Take one down and pass it around, no more bottles of beer on the wall.`;
    } else if (i === 0) {
      yield `No more bottles of beer on the wall, no more bottles of beer.`;
      yield `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    } else if (i === 2) {
      yield `${i} bottles of beer on the wall, ${i} bottles of beer.`;
      yield `Take one down and pass it around, ${i-1} bottle of beer on the wall.`;
    } else {
      yield `${i} bottles of beer on the wall, ${i} bottles of beer.`;
      yield `Take one down and pass it around, ${i-1} bottles of beer on the wall.`;
    }        
  }    
}


/**
 * Returns the Fibonacci sequence:
 *   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
 *
 * See more at: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @return {Iterable.<number>}
 *
 */
export function* getFibonacciSequence() {
  let a = 1;
  let b = 0;
  while (true){  
    let current = b;
    b = a;
    a = a + current;
    yield current;
  }
}


/**
 * Traverses a tree using the depth-first strategy
 * See details: https://en.wikipedia.org/wiki/Depth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in depth-first order
 * @example
 *
 *   var node1 = { n:1 }, node2 = { n:2 }, node3 = { n:3 }, node4 = { n:4 },
 *       node5 = { n:5 }, node6 = { n:6 }, node7 = { n:7 }, node8 = { n:8 };
 *   node1.children = [ node2, node6, node7 ];
 *   node2.children = [ node3, node4 ];
 *   node4.children = [ node5 ];
 *   node7.children = [ node8 ];
 *
 *     source tree (root = 1):
 *            1
 *          / | \
 *         2  6  7
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       3   4     8
 *           |
 *           5
 *
 *  depthTraversalTree(node1) => node1, node2, node3, node4, node5, node6, node7, node8
 *
 */
export function* depthTraversalTree(root) {
  let stack = [];
  stack.push(root);
  while(stack.length > 0) {
    let node = stack.pop();
    yield node;
    if(node.children){
      for(let i = node.children.length - 1; i >= 0; i--){
        let child = node.children[i];
        stack.push(child);
      }
    }
  }
}


/**
 * Traverses a tree using the breadth-first strategy
 * See details: https://en.wikipedia.org/wiki/Breadth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in breadth-first order
 * @example
 *     source tree (root = 1):
 *
 *            1
 *          / | \
 *         2  3  4
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       5   6     7
 *           |
 *           8
 *
 */
export function* breadthTraversalTree(root) {
  let queue = [];
  queue.push(root);
  let x = 0;
  while(queue.length > x) {      
    let node = queue[x];
    yield node;
    if(node.children){
      for(let i = 0; i < node.children.length; i++){
        queue.push(node.children[i]);
      }
    }
    x += 1; 
  }   
}


/**
 * Merges two yield-style sorted sequences into the one sorted sequence.
 * The result sequence consists of sorted items from source iterators.
 *
 * @params {Iterable.<number>} source1
 * @params {Iterable.<number>} source2
 * @return {Iterable.<number>} the merged sorted sequence
 *
 * @example
 *   [ 1, 3, 5, ... ], [2, 4, 6, ... ]  => [ 1, 2, 3, 4, 5, 6, ... ]
 *   [ 0 ], [ 2, 4, 6, ... ]  => [ 0, 2, 4, 6, ... ]
 *   [ 1, 3, 5, ... ], [ -1 ] => [ -1, 1, 3, 5, ...]
 */
export function* mergeSortedSequences(source1, source2) {
  let result = []; 
  let func1 = source1();
  let func2 = source2();
  let one;
  let two;
  for (let i = 0; true; i+=2){
    let obj1 = func1.next();
    let obj2 = func2.next();

    one = obj1.value;
    two = obj2.value; 
    
    if(one > two){
      let that = one;
      one = two;
      two = that;
    }

    if (!obj1.done){
      result.push(one);       
    } else {
      i -= 1;
    }   

    if (!obj2.done){      
      result.push(two);     
    } else {
      i -= 1;
    }   

    if (obj1.done || obj2.done){
      yield result[i+1];
    } else {
      yield result[i];
      yield result[i+1];
    }       
  } 
}
