// script.js

// Per instalar json-server: npm install -g json-server
// Per iniciar json-server: npx json-server --watch db.json

function fetchTasks() {
  fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => displayTasks(tasks))
    .catch(error => console.error('Error:', error))
}

function displayTasks(tasks) {
  const tasksList = document.getElementById('tasksList')
  tasksList.innerHTML = ''

  tasks.forEach(task => {
    const taskItem = document.createElement('div')
    taskItem.innerHTML = `<strong>${task.title}</strong> - Completed: ${
      task.completed ? 'Yes' : 'No'
    }`
    tasksList.appendChild(taskItem)
  })
}

function addTask(title) {
  fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, completed: false })
  })
    .then(response => response.json())
    .then(newTask => {
      console.log('New Task:', newTask)
      fetchTasks()
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
      fetchTasks()
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
        fetchTasks()
      } else {
        console.error('Error deleting task.')
      }
    })
    .catch(error => console.error('Error:', error))
}

// Example usage:
// addTask("New Task");
// updateTask(1, { completed: true });
// deleteTask(2);
