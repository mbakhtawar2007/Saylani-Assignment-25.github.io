// ==========================================
// ✅ REST OPERATOR – PRACTICE
// ==========================================

// 1️⃣ sumAll – Accept unlimited numbers & return total
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("sumAll:", sumAll(1, 2, 3, 4)); // 10


// 2️⃣ findMax – Return maximum number
function findMax(...numbers) {
  return Math.max(...numbers);
}
console.log("findMax:", findMax(10, 5, 20, 8)); // 20


// 3️⃣ greetUsers – First param message, rest names
function greetUsers(message, ...names) {
  return `${message}: ${names.join(", ")}`;
}
console.log(greetUsers("Hello", "Ali", "Ahmed", "Sara"));


// 4️⃣ Array destructuring with rest
let arr1 = [10, 20, 30, 40, 50];
let [first, second, ...restArr] = arr1;

console.log("First:", first);      // 10
console.log("Second:", second);    // 20
console.log("Rest:", restArr);     // [30, 40, 50]


// 5️⃣ Object destructuring with rest
let student = {
  name: "Ali",
  age: 20,
  class: "JS",
  city: "Karachi"
};

let { name, ...restObj } = student;

console.log("Name:", name);
console.log("Rest Object:", restObj);


// 6️⃣ Store first argument & rest in array
function storeItems(firstItem, ...others) {
  return { firstItem, others };
}
console.log("storeItems:", storeItems(1, 2, 3, 4));


// 7️⃣ filterEven – Return only even numbers
function filterEven(...numbers) {
  return numbers.filter(num => num % 2 === 0);
}
console.log("filterEven:", filterEven(1, 2, 3, 4, 5, 6));


// 8️⃣ Rest parameter must be last (Error Example)
// ❌ Uncommenting below will cause SyntaxError

/*
function test(...numbers, last) {
  return numbers;
}
*/

// Error: SyntaxError: Rest parameter must be last formal parameter


// 9️⃣ Combine strings into single sentence
function makeSentence(...words) {
  return words.join(" ");
}
console.log("Sentence:", makeSentence("I", "am", "learning", "JavaScript"));


// 🔟 Multiply first argument by 2 & return rest
function processNumbers(firstNum, ...others) {
  return {
    doubledFirst: firstNum * 2,
    remaining: others
  };
}
console.log("processNumbers:", processNumbers(5, 10, 15, 20));



// ==========================================
// ✅ SPREAD OPERATOR – PRACTICE
// ==========================================


// 1️⃣ Copy array & test modification
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];

copiedArray.push(4);

console.log("Original:", originalArray); // [1,2,3]
console.log("Copied:", copiedArray);     // [1,2,3,4]


// 2️⃣ Merge two arrays
let arrayA = [1, 2];
let arrayB = [3, 4];
let mergedArray = [...arrayA, ...arrayB];

console.log("Merged Array:", mergedArray);


// 3️⃣ Insert values in middle
let arr2 = [1, 2, 6, 7];
let updatedArray = [1, 2, ...[3, 4, 5], 6, 7];

console.log("Inserted Middle:", updatedArray);


// 4️⃣ Pass array to function using spread
function addThree(a, b, c) {
  return a + b + c;
}

let nums = [10, 20, 30];
console.log("addThree:", addThree(...nums));


// 5️⃣ Copy object & add new property
let user = { name: "Ali", age: 22 };
let newUser = { ...user, city: "Lahore" };

console.log("New User:", newUser);


// 6️⃣ Override property in object
let person = { name: "Ali", age: 25 };
let updatedPerson = { ...person, age: 30 };

console.log("Updated Person:", updatedPerson);


// 7️⃣ Spread with nested object (Shallow Copy Example)
let originalObj = {
  name: "Ali",
  address: {
    city: "Karachi"
  }
};

let copiedObj = { ...originalObj };
copiedObj.address.city = "Lahore";

console.log("Original City After Change:", originalObj.address.city);
// Lahore (because spread is shallow copy)


// 8️⃣ Remove duplicates using Spread + Set
let duplicateNumbers = [1, 2, 2, 3, 4, 4];
let uniqueNumbers = [...new Set(duplicateNumbers)];

console.log("Unique Numbers:", uniqueNumbers);


// 9️⃣ Reverse array without modifying original
let arr3 = [1, 2, 3, 4];
let reversedArray = [...arr3].reverse();

console.log("Original arr3:", arr3);
console.log("Reversed:", reversedArray);


// 🔟 combineData – Merge two objects
function combineData(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let obj1 = { name: "Ali", age: 20 };
let obj2 = { age: 25, city: "Karachi" };

console.log("combineData:", combineData(obj1, obj2));
