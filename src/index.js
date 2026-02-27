// src/index.js (or root index.js)

function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { add, greet };

// Simple test trigger
if (require.main === module) {
  console.log(greet("World"));
}
