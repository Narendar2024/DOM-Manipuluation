const input = document.querySelector("input");

// input.addEventListener("keypress", () => {
//   console.log("Key Pressed");
// });

// input.addEventListener("keyup", () => {
//   console.log("Key Up");
// });

// input.addEventListener("keydown", () => {
//   console.log("Key Down");
// });

// USEFULL PROPERTIES AND METHODS

input.addEventListener("keypress", (e) => {
  //   console.log(e.charCode);
  //   console.log(e.code);
  //   console.log(e.ctrlKey);
  console.log(e.key);
  console.log(e.shiftKey);
});
