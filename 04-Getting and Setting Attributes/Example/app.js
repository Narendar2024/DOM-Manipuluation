// 1. Select the anchor tag
const a = document.querySelector("a");
// 2. Use getAttribute(attrName) to check the attribute
console.log(a.getAttribute("href"));

// 3. Select a-two & "href" attribute
const a2 = document.querySelector(".a-two");
// 4. setAttribute(attrName, vlaue)
a2.setAttribute("href", "https://udemy.com");
console.log(a2.href);
