let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let div = document.querySelector(".main");

btn.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push(inp.value);
  localStorage.setItem("data", JSON.stringify(data));
  getItems();
});
function getItems() {
  div.innerHTML = ``;
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.forEach((item, index) => {
    let box = document.createElement("div");
    box.innerHTML = `<p>${item}</p> <button onclick="delItem(${index})">Delete</button>`;
    div.appendChild(box);
  });
}
function delItem(index) {
  let data = JSON.parse(localStorage.getItem("data"));
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  getItems();
}
window.onload = () => {
  getItems();
};
