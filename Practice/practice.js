//Reversing a string

// const str = 'Hi my name is Andrie';
//**********************
//using builtin method
// function reverse(str) {
//   const char = str.split('');
//   const reversedArr = char.reverse();
//   const final = reversedArr.join(' ');
//   console.log(final);
// }

// reverse(str);

//creating from scratch
// function reverse(str) {
//   const reversedArr = [];
//   const totalItems = str.length - 1;

//   for (i = totalItems; i >= 0; i--) {
//     reversedArr.push(str[i]);
//   }
//   const final = reversedArr.join('');
//   console.log(final);
// }

// reverse(str);

// ********************Merging two arrays
// method 1
// function mergeSortedArrays(arr1, arr2){
//     const mergedArr = [...arr1,...arr2]
//     console.log(mergedArr.sort(function(a, b){return a-b});
// }

// mergeSortedArrays([0,3,4,31],[4,6,30])

// Method 2
// function mergeSortedArrays(arr1, arr2) {
//   for (i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
//   }
//   const sortedmergedarr = arr1.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(sortedmergedarr);
//   return sortedmergedarr;
// }

// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// Method 3
// function mergeSortedArrays(array1, array2){
//     const mergedArray = [];
//     let array1Item = array1[0];
//     let array2Item = array2[0];
//     let i = 1;
//     let j = 1;

//     //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//     if(array1.length === 0) {
//       return array2;
//     }
//     if(array2.length === 0) {
//       return array1;
//     }

//     while (array1Item || array2Item){
//      if(array2Item === undefined || array1Item < array2Item){
//        mergedArray.push(array1Item);
//        array1Item = array1[i];
//        i++;
//      }
//      else {
//        mergedArray.push(array2Item);
//        array2Item = array2[j];
//        j++;
//      }
//     }
//     return mergedArray;
//   }

//   mergeSortedArrays([0,3,4,31], [3,4,6,30]);

// ***********Array Exercise creating an insert method from scratch
// class myArray {
//   constructor() {
//     this.array = [];
//     this.length = 0;
//   }
//   append(value) {
//     this.array.push(value);
//     this.length++;
//     // console.log(this.array);
//     return this;
//   }
//   insert(index, value) {
//     if (index < 0 || index > this.length) {
//       this.array.append(value);
//       console.log(this.array);
//       return this.array;
//     }

//     for (let i = this.length; i > index; i--) {
//       //shifting elements to one step ahead to their index to create empty space of this coming value
//       this.array[i] = this.array[i - 1];
//     }
//     this.array[index] = value;
//     this.length++;
//     console.log(this.array);

//     return this.array;
//   }
// }

// const arr = new myArray();

// arr.append(5);
// arr.append(4);
// arr.append(6);
// arr.append(8);
// arr.insert(2, 99);

// ****************** Creating a own Hash Table from scratch
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     const address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     const address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (const i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][0];
//         }
//       }
//     }
//   }

//   keys() {
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     console.log(keysArray);
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('oranges', 873);
// myHashTable.set('bananas', 10000);
// myHashTable.set('apples', 9);
// myHashTable.get('grapes');
// myHashTable.get('apples');
// myHashTable.keys();

//************/
// Method 1 having big O(n^2)
// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }
// // Method 2 having big O(n)
// function firstRecurringCharacter2(input) {
//   let map = {};
//   for (let i = 0; i < input.length; i++) {
//     if (map[input[i]] !== undefined) {
//       return input[i];
//     } else {
//       map[input[i]] = i;
//     }
//   }
//   return undefined;
// }

// firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]);

// Method 3 having big O(n)

// const givenArray = [2,5,5,2,3,5,1,2,4];

// function findFirstRepeat(givenArray) {
//   let compliment = [];

//   for (i = 0; i < givenArray.length; i++) {
//     if (compliment.includes(givenArray[i])) {
//       console.log(givenArray[i]);
//       return givenArray[i];
//     } else {
//       compliment.push(givenArray[i]);
//     }
//   }
//   return undefined;
// }

// findFirstRepeat(givenArray);

// ********************** Linked List

// class node {
//   constructor(value) {
//     (this.value = value), (this.next = null);
//   }
// }

// class linkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = new node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     console.log(this);
//   }

//   prepend(value) {
//     const newNode = new node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     console.log(this);
//   }

//   printList() {
//     const arr = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(arr);
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = new node(value);

//     //grabbing the entry which is one step behind the giving index
//     const leader = this.grabLeaderWithItsPointer(index - 1);
//     //holding "next/pointer" object of the leader entry
//     const holdingPointer = leader.next;
//     //setting "next/pointer" of the leader entry to point to the new coming node
//     leader.next = newNode;
//     //pointing the next of the new coming node to the holding pointer which contains the rest of the linked list
//     newNode.next = holdingPointer;
//     //incrementing the length
//     this.length++;

//     console.log(this);

//     return this;
//   }
//   grabLeaderWithItsPointer(index) {
//     let counter = 0;
//     const currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next; //using this we are going deeper and deeper in the list
//       counter++;
//     }
//     return currentNode;
//   }

//   remove(index) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const leader = this.grabLeaderWithItsPointer(index - 1);
//     const targetNode = leader.next; //targetNode is a node which we want to delete
//     //here below we are pointing our leader pointer to the node which is next to the targetNode
//     leader.next = targetNode.next;
//     this.length--;

//     return this;
//   }
// }

// const myLinkedList = new linkedList(10);
// myLinkedList.append(5);
// myLinkedList.prepend(1);
// myLinkedList.insert(1, 99);
// myLinkedList.remove(1);
// myLinkedList.printList();
// ********************** Reversing the Linked List

// class node {
//   constructor(value) {
//     (this.value = value), (this.next = null);
//   }
// }

// class linkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = new node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     console.log(this);
//   }

//   prepend(value) {
//     const newNode = new node(value);
//     newNode.next = this.head;
//     this.head = newNode;
// this.length++;
//     console.log(this);
//   }

//   printList() {
//     const arr = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(arr);
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = new node(value);

//     //grabbing the entry which is one step behind the giving index
//     const leader = this.grabLeaderWithItsPointer(index - 1);
//     //holding "next/pointer" object of the leader entry
//     const holdingPointer = leader.next;
//     //setting "next/pointer" of the leader entry to point to the new coming node
//     leader.next = newNode;
//     //pointing the next of the new coming node to the holding pointer which contains the rest of the linked list
//     newNode.next = holdingPointer;
//     //incrementing the length
//     this.length++;

//     console.log(this);

//     return this;
//   }
//   grabLeaderWithItsPointer(index) {
//     let counter = 0;
//     const currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next; //using this we are going deeper and deeper in the list
//       counter++;
//     }
//     return currentNode;
//   }

//   remove(index) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const leader = this.grabLeaderWithItsPointer(index - 1);
//     const targetNode = leader.next; //targetNode is a node which we want to delete
//     //here below we are pointing our leader pointer to the node which is next to the targetNode
//     leader.next = targetNode.next;
//     this.length--;

//     return this;
//   }

//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }

//     let first = this.head; //grabbing the first item
//     this.tail = this.head; //swapping the firt and last
//     let second = first.next; //grabbing the second item
//     //below we are swapping the pointers
//     while (second) {
//       const temp = second.next; //here second.next is the 3rd item
//       second.next = first; //replacing 4th (last in this case) with the 1st item
//       first = second;
//       second = temp;
//     }
//     this.head.next = null;
//     this.head = first;
//     return this.printList();
//   }
// }

// const myLinkedList = new linkedList(10);
// myLinkedList.append(5);
// myLinkedList.prepend(1);
// myLinkedList.insert(1, 99);
// myLinkedList.remove(1);
// myLinkedList.printList();
// myLinkedList.reverse();

// ********************Doubly Linked list
// class node {
//   constructor(value) {
//     (this.value = value), (this.next = null), (this.prev = null);
//   }
// }
// class doublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       prev: null,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = new node(value);
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     console.log(this);
//   }

//   prepend(value) {
//     const newNode = new node(value);
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//     console.log(this);
//   }

//   printList() {
//     const arr = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(arr);
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = new node(value);

//     //grabbing the entry which is one step behind the giving index
//     const leader = this.grabLeaderWithItsPointer(index - 1);
//     //holding "next/pointer" object of the leader entry
//     const follower = leader.next;
//     //setting "next/pointer" of the leader entry to point to the new coming node
//     leader.next = newNode;
//     newNode.prev = leader;
//     //pointing the next of the new coming node to the holding pointer which contains the rest of the linked list
//     newNode.next = follower;
//     follower.prev = newNode;
//     //incrementing the length

//     this.length++;

//     console.log(this);

//     return this;
//   }
//   grabLeaderWithItsPointer(index) {
//     let counter = 0;
//     const currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next; //using this we are going deeper and deeper in the list
//       counter++;
//     }
//     return currentNode;
//   }

//   remove(index) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     // [1,10,5,16]
//     const leader = this.grabLeaderWithItsPointer(index - 1);
//     // console.log('leader: ', leader);
//     const targetNode = leader.next; //targetNode is a node which we want to delete
//     //here below we are pointing our leader pointer to the node which is next to the targetNode

//     targetNode.next.prev = leader;
//     leader.next = targetNode.next;

//     this.length--;

//     return this;
//   }
// }

// const myLinkedList = new doublyLinkedList(1);
// myLinkedList.append(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.remove(1);
// myLinkedList.printList();

//Revering the linked list

// ******************Implementing stack data structure using linked list

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     console.log(this);
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     this.top = this.top.next;
//     this.length--;
//     console.log(this);
//     return this;
//   }
// }

// const myStack = new stack();

// myStack.push('google');
// myStack.push('udemy');
// myStack.push('youtube');
// myStack.peek();
// myStack.pop();
// myStack.pop();

// ******************Implementing stack data structure using arrays

// class stack {
//   constructor() {
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length - 1];
//   }
//   pussh(value) {
//     this.array.push(value);

//     console.log(this);

//     return this;
//   }
//   pop() {
//     this.array.pop();

//     console.log(this);

//     return this;
//   }
// }

const myStack = new stack();

// myStack.peek();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('youtube');
// myStack.peek();
// myStack.pop();
// myStack.pop();
// myStack.pop();

// // ******************Implementing Queue using stacks (and we will build stacks using arrays)

// class queue {
//   constructor() {
//     this.first = [];
//     this.last = [];
//     this.length = 0;
//   }
//   peek() {
//     if (this.first.length > 0) {
//       return this.first[this.first.length - 1];
//     }
//     return this.last[0];
//   }
//   enqueue(value) {
//     const length = this.first.length;
//     for (let i = 0; i < length; i++) {
//       this.last.push(this.first.pop());
//     }
//     this.last.push(value);
//     console.log(this);
//     return this;
//   }
//   dequeue() {
    
//     const length = this.first.length;
//     for (let i = 0; i < length; i++) {
//       this.first.push(this.last.pop());
//     }
//     this.first.pop(value);
//     console.log(this);
//     return this;
//   }
// }

// const myQueue = new queue();

// myQueue.peek();
// myQueue.enqueue('google');
// myQueue.enqueue('udemy');
// myQueue.enqueue('youtube');
// myQueue.dequeue();
// myQueue.dequeue();
