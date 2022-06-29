document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Place to store our tasks
  let tasksByPriority = {
    red: [],
    green: [],
    yellow: [],
  };
  // Adding user input to task list

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
    input.value = "";

    // Create li element
    let li = document.createElement("li");
    // Add task from user input to our li tag
    li.textContent = " " + inputText + " ";
    // Adding user task to task list
    taskList.append(li);

    // Delete Functionality

    // Create delete button
    let deleteBtn = document.createElement("button");
    // Added text content to button
    deleteBtn.textContent = "X";
    // Append delete button to page
    li.append(deleteBtn);
    // Add delete button click event
    deleteBtn.addEventListener("click", () => {
      // delete the li
      li.remove();
    });

    // Add colored task functionality

    // Grab select element
    let select = document.querySelector("#color-selector");
    // Grab selected option
    let selectOptions = select.options;
    let selectedColor = selectOptions[select.selectedIndex].value;
    // Style the task based on color from dropdown
    li.style.color = selectedColor;

    // Implenting sorting functionality
    // Check priority via color and place in tasks array accordingly
    if (selectedColor === "green") {
      tasksByPriority[2].push(inputText);
    } else if (selectedColor === "red") {
      tasksByPriority[0].push(inputText);
    } else {
      tasksByPriority[1].push(inputText);
    }

    // Display task list to user in that order
  });
});
