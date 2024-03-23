// intialize the count ass 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML reflect the new count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
console.log(saveEl);
function increment() {
  count += 1;
  countEl.innerText = count;
  //   console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveEl.innerText += countStr;
  console.log(count);
}
