const input = document.getElementById("taskInput");
const select = document.getElementById("emojiSelect");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = `${task.emoji} ${task.text}`;
    if (task.done) span.classList.add("done");

    span.addEventListener("click", () => {
      tasks[index].done = !tasks[index].done;
      saveTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, emoji: select.value, done: false });
  saveTasks();
  input.value = "";
});

renderTasks();
