import store from "../store"

export const PostData = () => {
  const postTask = async (task: { title: string, status: string, priorityLevel: string }) => {
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const createdTask = await response.json()
    store.state.tasks.push(createdTask)
  }

  return {
    postTask
  }
}