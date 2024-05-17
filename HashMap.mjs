import LinkedList from "./LinkedList-iterative.mjs";
import Node from "./Node.mjs";
export default class HashMap {
  constructor(size = 16) {
    this.bucketsArray = [];
    this.loadFactor = 0.75;
    this.size = size;
  }

  // Create a hashCode from a key
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  // Insert a key-value pair in it's HashMap bucket
  set(key, value) {
    const bucketNum = this.hash(key) % this.size;
    if (this.bucketsArray[bucketNum] === undefined) {
      this.bucketsArray[bucketNum] = new LinkedList(new Node(key, value, null));
      return;
    }

    if (this.bucketsArray[bucketNum].contains(key)) {
      this.bucketsArray[bucketNum].insertAt(
        key,
        value,
        this.bucketsArray[bucketNum].find(key)
      );
      this.bucketsArray[bucketNum].removeAt(key + 1);
    }

    // TODO handle collisions
  }

  // Get the value associated to the given key
  get(key) {
    const bucketNum = this.hash(key) % this.size;
    if (this.bucketsArray[bucketNum] === undefined) {
      return null;
    }
    return this.bucketsArray[bucketNum].headNode.value;
  }
}
