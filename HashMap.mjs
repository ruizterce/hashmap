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
      const index = this.bucketsArray[bucketNum].find(key);
      this.bucketsArray[bucketNum].removeAt(index);
      this.bucketsArray[bucketNum].insertAt(key, value, index);

      return;
    }
    this.bucketsArray[bucketNum].append(key, value);
    // TODO handle bucket size growth
  }

  // Get the value associated to the given key
  get(key) {
    if (!this.has(key)) return null;
    const bucketNum = this.hash(key) % this.size;
    return this.bucketsArray[bucketNum].at(
      this.bucketsArray[bucketNum].find(key)
    ).value;
  }

  // Return true if a key is in the HashMap, false if not.
  has(key) {
    const bucketNum = this.hash(key) % this.size;
    if (this.bucketsArray[bucketNum] === undefined) {
      return false;
    }
    if (this.bucketsArray[bucketNum].contains(key)) return true;
    return false;
  }

  remove(key) {
    if (!this.has(key)) return false;
    const bucketNum = this.hash(key) % this.size;
    this.bucketsArray[bucketNum].removeAt(
      this.bucketsArray[bucketNum].find(key)
    );
    return true;
  }

  // Return the number of stored keys in the HashMap
  length() {
    let counter = 0;
    this.bucketsArray.forEach((bucket) => (counter += bucket.size));
    return counter;
  }

  // Remove all entries in the HashMap
  clear() {
    this.bucketsArray = [];
  }

  // Return an array containing all the keys in the HashMap
  keys() {
    let array = [];
    this.bucketsArray.forEach((bucket) => {
      for (let i = 0; i < bucket.size; i++) {
        array.push(bucket.at(i).key);
      }
    });
    return array;
  }

  // Return an array containing all the values in the HashMap
  values() {
    let array = [];
    this.bucketsArray.forEach((bucket) => {
      for (let i = 0; i < bucket.size; i++) {
        array.push(bucket.at(i).value);
      }
    });
    return array;
  }

  // Return an array containing each key, value pair
  entries() {
    let array = [];
    this.bucketsArray.forEach((bucket) => {
      for (let i = 0; i < bucket.size; i++) {
        const node = bucket.at(i);
        const pair = [node.key, node.value];
        array.push(pair);
      }
    });
    return array;
  }
}
