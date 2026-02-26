var inputStr = "Hello     World!";

// inputStr = inputStr.replace(/([a-z])([A-Z])/g, '$1 $2'); // Insert space between lowercase and uppercase letters

// // remove all other except [A-Z][a-z]
// inputStr = inputStr.replace(/[^A-Za-z]/g, '');

inputStr = inputStr.replace(/[\s]+/g, ''); // Remove all whitespace characters

console.log(inputStr); // Output: HelloWorld