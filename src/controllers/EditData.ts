import store from "../store"

export const EditData = () => {
  const editTask = async (task: {id: any; title: string, status: string, priorityLevel: string}) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      if(!response.ok) {
        throw new Error('Failed to edit task')
      }
      const updatedTask = await response.json()
      const index = store.state.tasks.findIndex((item: { id: any; }) => item.id === updatedTask.id)
      if(index !== -1) {
        store.state.tasks[index] = updatedTask
      }
    } catch {
      console.log('error')
    }
  }

  return {
    editTask
  }
}