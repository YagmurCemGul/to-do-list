// Get references to the elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const newTaskItem = document.createElement('li');
  newTaskItem.textContent = taskText;

  // Create a delete button for the task
  const deleteButton = document.createElement('span');
  deleteButton.textContent = 'x';
  deleteButton.classList.add('delete-button');
  deleteButton.onclick = function () {
    taskList.removeChild(newTaskItem);
  };

  // Append the delete button to the list item
  newTaskItem.appendChild(deleteButton);

  // Append the new task to the task list
  taskList.appendChild(newTaskItem);

  // Clear the input field
  taskInput.value = '';
}

// Add event listener for the "Enter" key press
taskInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
