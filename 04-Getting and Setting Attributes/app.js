// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
const input = document.querySelector("input");

// Getting Attributes
// console.log(a.href);
// console.log(input.value);
// console.log(input.type);

// Setting Attributes
// a.href = "https://youtube.com";
// console.log((input.value = "Hello"));
// console.log((input.type = "password"));
// console.log((input.placeholder = "please provide a strong password"));
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttribute(attrName, value)
input.setAttribute("placeholder", "password");
input.setAttribute("type", "password");
