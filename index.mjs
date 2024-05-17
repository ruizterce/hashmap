import HashMap from "./HashMap.mjs";

// Initiate instance of the HashMap
const myHashMap = new HashMap();
// Save a key-value pair in the hashmap
myHashMap.set("Key 1", "Key 1 value");
// Print the value assigned to "Key 1"
console.log(myHashMap.get("Key 1"));
// Assign a new value to "Key 1"
myHashMap.set("Key 1", "Key 1 replaced value");
// Print the new value assigned to "Key 1"
console.log(myHashMap.get("Key 1"));
// Set another key-value pair for "Key 10", that collides with "Key 1"
myHashMap.set("Key 10", "Key 10 value");
// Print the value assigned to "Key 10"
console.log(myHashMap.get("Key 10"));
// Check if myHashMap contains "Key 10"
console.log(myHashMap.has("Key 10"));
// Save a new key-value pair in the hashmap
myHashMap.set("Key 2", "Key 2 value");
// Print an array with the stored keys
console.log(myHashMap.keys());
// Print an array with the stored values
console.log(myHashMap.values());
// Print an array with the stored pairs of key, value
console.log(myHashMap.entries());
// Print the number of stored keys
console.log(myHashMap.length());
// Remove "Key 10"
console.log(myHashMap.remove("Key 10"));
// Check if myHashMap contains "Key 10"
console.log(myHashMap.has("Key 10"));
// Print an array with the stored keys
console.log(myHashMap.keys());
// Print an array with the stored values
console.log(myHashMap.values());
// Print the number of stored keys
console.log(myHashMap.length());
//Clear myHashMap
myHashMap.clear();
// Print the number of stored keys
console.log(myHashMap.length());
