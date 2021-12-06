import fetch from 'node-fetch';

export const hitGraphqlEndPoint =
  async ({ operationName, variables, query }) =>
    await fetch('http://localhost:3001/graphql', {
      method: 'POST',
      body: JSON.stringify({ operationName, variables, query }),
      headers: { 'Content-Type': 'application/json', AUTHORIZATION: `Bearer ${global.authToken}` },
    });
