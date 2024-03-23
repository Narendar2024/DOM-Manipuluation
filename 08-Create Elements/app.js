//----------------
// CreateElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    element
) */

// removeChild()
// remove()
//----------------------

// Creating Element
const h1 = document.createElement("h1");
const body = document.body;
h1.textContent = "Hello World";
h1.classList.add("greeting");
body.appendChild(h1);
console.log(h1);

//----------------------

//-----------------------------

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "I'm li tag";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");
// selector insertBefore(what, where)
ul.insertBefore(newLi, firstLi);

//---------------------------

//----------------------

// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.style.color = "skyblue";
// i.innerText = "I'm italics";
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("afterend", i);
// firstP.insertAdjacentElement("beforeend", i);

//-----------------------------

//-----------------------------

let section = document.querySelector("section");
const i = document.createElement("i");
i.innerText = "I'm italic";
i.style.color = "skyblue";

const h4 = document.createElement("h4");
h4.innerText = "ThumsUp";
h4.style.color = "crimson";

const span = document.createElement("span");
span.innerText = "CokoCola";
span.style.color = "brown";
section.append(i, h4);
section.prepend(span);

//-----------------------------

//-----------------------------

// const newList = document.querySelector(".new-list");
// const fourth = document.querySelector(".fourth");
// newList.removeChild(fourth);
// newList.remove();
