import store from "../store"

export const GetData = () => {
  const getTasks = async () => {
    await fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => store.state.tasks = data)
  }
  
  return {
    getTasks
  }
}