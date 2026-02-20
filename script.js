<<<<<<< HEAD
document.body.style.fontFamily = "Arial, sans-serif";

function display(title, value) {
    document.body.innerHTML += `<p><strong>${title}</strong> ${JSON.stringify(value)}</p>`;
}



// 1️⃣ Create a function sumAll that accepts unlimited numbers using the rest operator and returns their total.
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
display("sumAll:", sumAll(1, 2, 3, 4));


// 2️⃣ Create a function findMax that uses the rest operator and returns the maximum number.
function findMax(...numbers) {
    return Math.max(...numbers);
}
display("findMax:", findMax(10, 5, 20, 8));


// 3️⃣ Create a function greetUsers where the first parameter is message and the rest of the parameters are names.
function greetUsers(message, ...names) {
    return `${message}: ${names.join(", ")}`;
}
display("greetUsers:", greetUsers("Hello", "Ali", "Ahmed", "Sara"));


// 4️⃣ Use array destructuring with rest operator.
let arr1 = [10, 20, 30, 40, 50];
let [first, second, ...restArr] = arr1;
display("Array Destructuring:", { first, second, restArr });


// 5️⃣ Use object destructuring with rest operator.
let student = {
    name: "Ali",
    age: 20,
    class: "JS",
    city: "Karachi"
};
let { name, ...restObj } = student;
display("Object Destructuring:", { name, restObj });


// 6️⃣ Create a function that stores the first argument in firstItem and collects the remaining arguments into an array using the rest operator.
function storeItems(firstItem, ...others) {
    return { firstItem, others };
}
display("storeItems:", storeItems(1, 2, 3, 4));


// 7️⃣ Create a function filterEven that uses the rest operator and returns only the even numbers.
function filterEven(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}
display("filterEven:", filterEven(1, 2, 3, 4, 5, 6));


// 8️⃣ Try placing the rest parameter in a position other than the last parameter in a function.
=======
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

>>>>>>> 13c7a1cc4c008f53b05b92982f6ad5c7aea6c741
/*
function test(...numbers, last) {
  return numbers;
}
*/

<<<<<<< HEAD

// 9️⃣ Create a function that accepts any number of strings using the rest operator and returns them as a single sentence.
function makeSentence(...words) {
    return words.join(" ");
}
display("makeSentence:", makeSentence("I", "am", "learning", "JavaScript"));


// 🔟 Create a function that multiplies the first argument by 2 and returns the remaining numbers as an array using the rest operator.
function processNumbers(firstNum, ...others) {
    return {
        doubledFirst: firstNum * 2,
        remaining: others
    };
}
display("processNumbers:", processNumbers(5, 10, 15, 20));




// 1️⃣ Copy an array using the spread operator and check whether modifying the new array affects the original array.
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
copiedArray.push(4);
display("Copy Array:", { originalArray, copiedArray });


// 2️⃣ Merge two arrays using the spread operator.
let arrayA = [1, 2];
let arrayB = [3, 4];
let mergedArray = [...arrayA, ...arrayB];
display("Merged Array:", mergedArray);


// 3️⃣ Insert values in the middle of an array using spread.
let arr2 = [1, 2, 6, 7];
let updatedArray = [1, 2, ...[3, 4, 5], 6, 7];
display("Insert Middle:", updatedArray);


// 4️⃣ Create a function that accepts three parameters and pass an array to it using the spread operator.
function addThree(a, b, c) {
    return a + b + c;
}
let nums = [10, 20, 30];
display("addThree:", addThree(...nums));


// 5️⃣ Copy an object using the spread operator and add a new property to it.
let user = { name: "Ali", age: 22 };
let newUser = { ...user, city: "Lahore" };
display("Copy Object:", newUser);


// 6️⃣ Override a property in an object using the spread operator.
let person = { name: "Ali", age: 25 };
let updatedPerson = { ...person, age: 30 };
display("Override Property:", updatedPerson);


// 7️⃣ Use spread operator on a nested object and observe the result.
let originalObj = {
    name: "Ali",
    address: { city: "Karachi" }
};
let copiedObj = { ...originalObj };
copiedObj.address.city = "Lahore";
display("Nested Object Shallow Copy:", originalObj);


// 8️⃣ Remove duplicate values from an array using spread operator and Set.
let duplicateNumbers = [1, 2, 2, 3, 4, 4];
let uniqueNumbers = [...new Set(duplicateNumbers)];
display("Remove Duplicates:", uniqueNumbers);


// 9️⃣ Reverse an array using spread operator without modifying the original array.
let arr3 = [1, 2, 3, 4];
let reversedArray = [...arr3].reverse();
display("Reverse Array:", { arr3, reversedArray });


// 🔟 Create a function combineData that merges two objects using the spread operator.
function combineData(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let obj1 = { name: "Ali", age: 20 };
let obj2 = { age: 25, city: "Karachi" };
display("combineData:", combineData(obj1, obj2));
=======
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
>>>>>>> 13c7a1cc4c008f53b05b92982f6ad5c7aea6c741
