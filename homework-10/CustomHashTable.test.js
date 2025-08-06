const CustomHashTable = require('./CustomHashTable');

const table = new CustomHashTable(8);

table.insert("test1", 10);
table.insert("test2", 20);
table.insert("test3", 30);

console.log(table.get("test1"));   // 10
console.log(table.get("test2"));  // 20
console.log(table.get("test3"));  // 30
console.log(table.get("test4"));    // undefined

table.insert("test1", 25);
console.log(table.get("test1"));  // 25

table.delete("test3");
console.log(table.get("test3"));   // undefined