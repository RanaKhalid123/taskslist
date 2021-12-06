export const FETCH_ALL_LIST_QUERY = `
query getAllLists{
	getAllLists {
    lists {
      id
    	title
      tasks{
        title
        id
        order
        status
      }
    }
    response {
      status
			message
      name
      error
    }
  }
}`

export const CREATE_LIST_MUTATION = `
mutation createList($createListInput: CreateListInput!) {
  createList(createListInput: $createListInput){
  	list{
      id
      title
    }
    response{
      message
      status
      error
      name
    }
  }
}`

export const CREATE_TASK_MUTATION = `
mutation createTask($createTaskInput: CreateTaskInput!) {
  createTask(createTaskInput: $createTaskInput){
  	task{
      id
      title
      status
    }
    response{
      message
      status
      error
      name
    }
  }
}`

export const UPDATE_TASK_MUTATION = `
mutation updateTask($updateTaskInput: UpdateTaskInput!) {
  updateTask(updateTaskInput: $updateTaskInput){
  	task{
      id
      title
      status
    }
    response{
      message
      status
      error
      name
    }
  }
}`


export const UPDATE_TASK_POSITION_MUTATION = `
mutation updateTaskPosition($updateTaskPositionInput: UpdateTaskPositionInput!) {
  updateTaskPostion(updateTaskPositionInput: $updateTaskPositionInput){
  	task{
      id
      title
      status
    }
    response{
      message
      status
      error
      name
    }
  }
}`
