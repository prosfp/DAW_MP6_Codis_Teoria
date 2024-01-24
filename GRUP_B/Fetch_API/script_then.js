// Function to display tasks
function displayTasks(tasks) {
  // Clear the current tasks
  const tasksList = document.getElementById('tasksList')
  tasksList.innerHTML = ''

  // Add each task to the display
  tasks.forEach(task => {
    const taskItem = document.createElement('div')
    taskItem.innerHTML = `<strong>${task.title}</strong> - Completed: ${
      task.completed ? 'Yes' : 'No'
    }`
    tasksList.appendChild(taskItem)
  })
}

// Fetch tasks and update athe display
function fetchTasks() {
  fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => {
      displayTasks(tasks)
      console.log(tasks)
    })
    .catch(error => console.error('Error:', error))
}

// Add a task
function addTask(title) {
  fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: title, completed: false })
  })
    .then(response => response.json())
    .then(newTask => {
      // Fetch tasks and update the display after adding a task
      fetchTasks()
      console.log('New Task:', newTask)
    })
    .catch(error => console.error('Error:', error))
}

function updateTask(id, updates) {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updates)
  })
    .then(response => response.json())
    .then(updatedTask => {
      console.log('Updated Task:', updatedTask)
    })
    .catch(error => console.error('Error:', error))
}

function deleteTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        console.log('Task deleted successfully.')
      } else {
        console.error('Error deleting task.')
      }
    })
    .catch(error => console.error('Error:', error))
}

document.getElementById('displayTasks').addEventListener('click', fetchTasks)

// Add a task when the "Add Task" button is clicked
document
  .getElementById('addTaskButton')
  .addEventListener('click', function (event) {
    event.preventDefault()
    addTask('Anar a la pelu')
  })

// Update a task when the "Update Task" button is clicked
document
  .getElementById('updateTaskButton')
  .addEventListener('click', function () {
    updateTask('1', { completed: true })
  })

// Delete a task when the "Delete Task" button is clicked
document
  .getElementById('deleteTaskButton')
  .addEventListener('click', function () {
    deleteTask('1')
  })
