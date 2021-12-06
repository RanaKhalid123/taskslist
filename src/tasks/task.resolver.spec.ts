import { hitGraphqlEndPoint } from '../../test/utils-for-test-cases'
import { CREATE_TASK_MUTATION, UPDATE_TASK_MUTATION, UPDATE_TASK_POSITION_MUTATION } from '../../test/types'
import { CreateTaskInput } from 'src/tasks/dto/create-task.input';
import { UpdateTaskPositionInput } from 'src/tasks/dto/update-task-position.input';

// create new Task in list 1
test('createTask new task in list 1', async () => {
  let tasks = await hitGraphqlEndPoint({
    operationName: "createTask",
    variables: { createTaskInput: { title: 'Task 1', order: 1, listId: 1 } as CreateTaskInput },
    query: CREATE_TASK_MUTATION,
  });
  expect(tasks.status).toBe(200);
  tasks = await tasks.json();
  expect(tasks.data.createTask.response.error).toBe(null);
});

// create new Task in list 2
test('createTask new task in list 2', async () => {
  let task = await hitGraphqlEndPoint({
    operationName: "createTask",
    variables: { createTaskInput: { title: 'Task 2', order: 1, listId: 2 } as CreateTaskInput },
    query: CREATE_TASK_MUTATION,
  });
  expect(task.status).toBe(200);
  task = await task.json();
  expect(task.data.createTask.response.error).toBe(null);
});

// update tasks 1
test('updateTask new task in list 1', async () => {
  let task = await hitGraphqlEndPoint({
    operationName: "updateTask",
    variables: { updateTaskInput: { id: 1, title: "Task 1 Updated", status: 'COMPLETED' } },
    query: UPDATE_TASK_MUTATION,
  });
  expect(task.status).toBe(200);
  task = await task.json();
  expect(task.data.updateTask.response.error).toBe(null);
});

//update tasks 2
test('updateTask new task in list 2', async () => {
  let task = await hitGraphqlEndPoint({
    operationName: "updateTask",
    variables: { updateTaskInput: { id: 2, title: "Task 2 Updated", status: 'INPROGRESS' } },
    query: UPDATE_TASK_MUTATION,
  });
  expect(task.status).toBe(200);
  task = await task.json();
  expect(task.data.updateTask.response.error).toBe(null);
});

//update task 1 position in list 1
test('update Task Position list 1', async () => {
  let task = await hitGraphqlEndPoint({
    operationName: "updateTaskPosition",
    variables: { updateTaskPositionInput: { id: 1, order: 3 } as UpdateTaskPositionInput },
    query: UPDATE_TASK_POSITION_MUTATION,
  });
  expect(task.status).toBe(200);
  task = await task.json();
  expect(task.data.updateTaskPostion.response.error).toBe(null);
});

//update task 2 position in list 2
test('update Task Position list 2', async () => {
  let task = await hitGraphqlEndPoint({
    operationName: "updateTaskPosition",
    variables: { updateTaskPositionInput: { id: 2, order: 4 } as UpdateTaskPositionInput },
    query: UPDATE_TASK_POSITION_MUTATION,
  });
  expect(task.status).toBe(200);
  task = await task.json();
  expect(task.data.updateTaskPostion.response.error).toBe(null);
});


