const emoji = document.querySelector("#emoji");

const emojis = [
  "😊",
  "😂",
  "🤣",
  "😒",
  "😀",
  "🥲",
  "😉",
  "😆",
  "😅",
  "😍",
  "😙",
  "🥰",
  "😉",
  "😗",
  "😘",
  "😊",
  "😎",
  "🤣",
  "😃",
  "😁",
  "😄",
  "😂",
];

const bgColors = [
  "black",
  "pink",
  "red",
  "blue",
  "green",
  "lightgreen",
  "#ccc",
  "#fff",
  "red",
  "lightblue",
];

emoji.addEventListener("mouseover", () => {
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  document.body.style.backgroundColor =
    bgColors[Math.floor(Math.random() * bgColors.length)];
});
