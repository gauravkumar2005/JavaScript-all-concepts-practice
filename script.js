/* =========================
   CHANGE TEXT
========================= */

const title = document.getElementById("title");

const changeTextBtn =
document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function(){

  title.innerText =
  "JavaScript DOM Manipulation";

});


/* =========================
   COUNTER APP
========================= */

let count = 0;

const countText =
document.getElementById("count");

const increase =
document.getElementById("increase");

const decrease =
document.getElementById("decrease");

increase.addEventListener("click", function(){

  count++;

  countText.innerText = count;

});

decrease.addEventListener("click", function(){

  count--;

  countText.innerText = count;

});


/* =========================
   BACKGROUND COLOR CHANGER
========================= */

const colorBtn =
document.getElementById("colorBtn");

const colors = [
  "lightblue",
  "lightgreen",
  "lightpink",
  "orange",
  "yellow"
];

colorBtn.addEventListener("click", function(){

  const randomColor =
  colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background =
  randomColor;

});


/* =========================
   FORM VALIDATION
========================= */

const submitBtn =
document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){

  const name =
  document.getElementById("nameInput").value;

  const message =
  document.getElementById("message");

  if(name === ""){

    message.innerText =
    "Please enter your name";

    message.style.color = "red";

  }

  else{

    message.innerText =
    "Welcome " + name;

    message.style.color = "green";

  }

});


/* =========================
   ARRAY & LOOP
========================= */

const languages = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js"
];

const languageList =
document.getElementById("languageList");

languages.forEach(function(language){

  const li =
  document.createElement("li");

  li.innerText = language;

  languageList.appendChild(li);

});


/* =========================
   DIGITAL CLOCK
========================= */

function updateClock(){

  const now = new Date();

  const time =
  now.toLocaleTimeString();

  document.getElementById("clock")
  .innerText = time;

}

setInterval(updateClock,1000);


/* =========================
   TOGGLE BOX
========================= */

const toggleBtn =
document.getElementById("toggleBtn");

const toggleBox =
document.getElementById("toggleBox");

toggleBtn.addEventListener("click", function(){

  if(toggleBox.style.display === "none"){

    toggleBox.style.display = "block";

  }

  else{

    toggleBox.style.display = "none";

  }

});


/* =========================
   CONSOLE EXAMPLES
========================= */

console.log("JavaScript Started");

console.log(5 + 5);

console.log("Learning JavaScript");


/* =========================
   OBJECT EXAMPLE
========================= */

const student = {

  name:"Gaurav",
  age:20,
  course:"B.Tech"

};

console.log(student.name);


/* =========================
   FUNCTION EXAMPLE
========================= */

function greet(name){

  return "Hello " + name;

}

console.log(greet("Gaurav"));


// Template Literal
const name = "Gaurav";
console.log(`Hello ${name}`);

// Destructuring
const user = {name:"Gaurav", age:20};
const {name:username, age} = user;

// Spread Operator
const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];

// Array Methods
const numbers = [1,2,3,4,5];

console.log(numbers.map(num => num * 2));

console.log(numbers.filter(num => num > 2));

console.log(numbers.reduce((a,b) => a+b,0));

// String Methods
const text = "JavaScript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.includes("Script"));

// Local Storage
localStorage.setItem("username","Gaurav");

console.log(
localStorage.getItem("username")
);

// Promise
const myPromise = new Promise((resolve,reject)=>{

  resolve("Promise Success");

});

myPromise.then(data=>{
  console.log(data);
});