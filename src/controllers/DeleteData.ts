import store from "../store"

export const DeleteData = () => {
  const deleteTask = async (id: String) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete task')
      }
      // Update the tasks array on render
      store.state.tasks = store.state.tasks.filter((task: { id: String; }) => task.id !== id)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    deleteTask
  }
}