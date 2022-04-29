import {Environment, Network, RecordSource, Store} from 'relay-runtime';

async function fetchGraphQL(text: string, variables: any) {
  // get the current users token  
  const token = sessionStorage.getItem("token");
  // fetch request from the backendserver
  const response = await fetch('https://europe-west1-homerev-users.cloudfunctions.net/v1', {
    method: 'POST',
    headers: {
      //give the token as Authorization header, so the requests are authorized
      Authorization: token as string,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  
  // Get the response as JSON
  return await response.json();
}
  

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params: { name: any; text: any; }, variables: any) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});