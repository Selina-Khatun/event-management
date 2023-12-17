# Add 5 Project features
### 1. Our website name is Wedding House. Our website has a navigation bar at the top.

### 2.There are 5 menu items in the navigation bar. Home, Service, About, Register, Login, Log Out. If there is a user then the logout button is shown and if there is no user then the login button is shown.
 
### 3.If anyone wants to see our services. Then you have to login first. You are not allowed to enter our service page without login.

### 4. You can login to our website directly from Google and you can also login with Gmail.

### 5. Our website  are accessible and fully functional on mobile devices.


  - - - -  # Website name  : Wedding House  
## Type: Event Management Application


   * # live site :
   [https://event-management-e3297.web.app]

   1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
## Answer :B 

### description: The variable is declared as "greeting," but it is later assigned as "greetign." Due to this typo, JavaScript will throw a ReferenceError because "greetign" is not defined

# 2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
## Answer:D
### description:the + operator will try to convert the numeric 1 to a string to concatenate it with the string "2", resulting in the string "12". When you return this value, it will be implicitly converted back to a number since you are returning the result of a mathematical operation (addition), giving you the numeric value 3.

# 3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
## Answer: A
### description:
4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer :
description:
5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer :
description:
