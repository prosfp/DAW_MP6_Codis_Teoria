// script.js

async function fetchTasks() {
  try {
    const response = await fetch('http://localhost:3000/tasks')
    const tasks = await response.json()
    displayTasks(tasks)
  } catch (error) {
    console.error('Error:', error)
  }
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

async function addTask(title) {
  try {
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, completed: false })
    })

    const newTask = await response.json()
    console.log('New Task:', newTask)
    await fetchTasks()
  } catch (error) {
    console.error('Error:', error)
  }
}

async function updateTask(id, updates) {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updates)
    })

    const updatedTask = await response.json()
    console.log('Updated Task:', updatedTask)
    await fetchTasks()
  } catch (error) {
    console.error('Error:', error)
  }
}

async function deleteTask(id) {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      console.log('Task deleted successfully.')
      await fetchTasks()
    } else {
      console.error('Error deleting task.')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

// Example usage:
// await addTask("New Task");
// await updateTask(1, { completed: true });
// await deleteTask(2);
