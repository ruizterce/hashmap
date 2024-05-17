import HashMap from "./HashMap.mjs";

// Initiate instance of the HashMap
const myHashMap = new HashMap();
console.log(myHashMap.hash("Key 1") % myHashMap.size);
// Save a key-value pair in the hashmap
myHashMap.set("Key 1", "Key 1 value");
// Print the value assigned to "Key 1"
console.log(myHashMap.get("Key 1"));
// Assign a new value to "Key 1"
myHashMap.set("Key 1", "Key 1 replaced value");
// Print the new value assigned to "Key 1"
console.log(myHashMap.get("Key 1"));
myHashMap.set("Key 10", "Key 10 value");
console.log(myHashMap.get("Key 10"));
