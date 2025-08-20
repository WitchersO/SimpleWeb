const input = document.getElementById("taskInput");
const select = document.getElementById("emojiSelect");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `${select.value} ${text}`;
  li.addEventListener("click", () => li.classList.toggle("done"));

  list.appendChild(li);
  input.value = "";
});
