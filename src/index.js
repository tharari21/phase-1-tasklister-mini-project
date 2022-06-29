document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Get form element
  let form = document.querySelector("#create-task-form");
  // Get task list element
  let taskList = document.getElementById("tasks");
  form.addEventListener("submit", (event) => {
    // Prevent page refresh
    event.preventDefault();
    // Get input element from DOM
    let input = document.getElementById("new-task-description");
    // Getting the text value from the input tag
    let inputText = input.value;
    // Adding user task to task list
    let li = document.createElement("li");
    li.textContent = inputText;
    taskList.append(li);
  });
});
