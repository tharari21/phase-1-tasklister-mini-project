document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Place to store our tasks
  const tasksByPriority = [];
  // Store indices of each priority type
  let firstGreen = 0;
  let firstYellow = 0;
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
    // Grab select element
    let select = document.querySelector("#color-selector");
    // Grab selected option
    let selectOptions = select.options;
    let selectedColor = selectOptions[select.selectedIndex].value;
    // Style the task based on color from dropdown

    // Getting the text value from the input tag
    let inputText = input.value;
    input.value = "";
    // Create li element
    let li = document.createElement("li");
    // Add task from user input to our li tag
    li.style.color = selectedColor;
    li.textContent = " " + inputText + " ";
    // Adding user task to task list
    // Check priority via color and place in tasks array accordingly
    if (selectedColor === "green") {
      tasksByPriority.splice(firstGreen, 0, li);
    } else if (selectedColor === "red") {
      tasksByPriority.unshift(li);
      firstYellow++;
      firstGreen++;
    } else {
      tasksByPriority.splice(firstYellow, 0, li);
      firstGreen++;
    }

    tasksByPriority.forEach((taskElem) => {
      taskList.append(taskElem);
    });
    console.log(tasksByPriority);

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

    // Implenting sorting functionality

    // Display task list to user in that order
  });
});
