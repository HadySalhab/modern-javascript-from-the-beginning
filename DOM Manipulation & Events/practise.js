let val;

let li = document.querySelector(".collection-item");
li.className = "collection-item-changed";
li.classList.add("collection-item-added");
li.className = "collection-item";
li.style.color = "red";
li.textContent = "Hello";
val = li.nextElementSibling;
val = li.previousElementSibling;
val = li.parentElement;
val = li.children;
val = li.nextElementSibling.children;
li.remove();

let newLi = document.createElement("li");
val = newLi;
newLi.className = "task__item";

let anc = document.createElement("a");
anc.setAttribute("href", "#");
val = anc;
anc.innerText = "Google";

newLi.appendChild(anc);
val = newLi;

let ul = document.querySelector(".collection");
val = ul;
ul.appendChild(newLi);

ul.removeChild(newLi);
console.log(val);

ul.addEventListener("click", runEvent);
ul.addEventListener("dblclick", runEvent);
ul.addEventListener("mouseover", runEvent);
ul.addEventListener("mouseout", runEvent);

function runEvent(e) {
  console.log(e.target);
}
