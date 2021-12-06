import { hitGraphqlEndPoint } from '../../test/utils-for-test-cases'
import { FETCH_ALL_LIST_QUERY, CREATE_LIST_MUTATION } from '../../test/types'
import { CreateListInput } from './dto/create-list.input';


//create new List 1
test('Create new List 1', async () => {
  let list = await hitGraphqlEndPoint({
    operationName: "createList",
    variables: { createListInput: { title: 'List 1' } as CreateListInput },
    query: CREATE_LIST_MUTATION,
  });
  expect(list.status).toBe(200);
  list = await list.json();
  expect(list.data.createList.response.error).toBe(null);
});

//create new List 2
test('Create new List 2', async () => {
  let lists = await hitGraphqlEndPoint({
    operationName: "createList",
    variables: { createListInput: { title: 'List 2' } as CreateListInput },
    query: CREATE_LIST_MUTATION,
  });
  expect(lists.status).toBe(200);
  lists = await lists.json();
  expect(lists.data.createList.response.error).toBe(null);
});

// Lists
test('Fetching all Lists', async () => {
  let lists = await hitGraphqlEndPoint({
    operationName: "getAllLists",
    variables: {},
    query: FETCH_ALL_LIST_QUERY,
  });
  expect(lists.status).toBe(200);
  lists = await lists.json();
  expect(lists.data.getAllLists.response.error).toBe(null);
});


