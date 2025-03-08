// The global fetch()method starts the process of 
// fetching a resource from the network, returning 
// a promise which is fulfilled once the response is 
// available.

// The Promise resolves to the Response object 
// representing the response to your request.

// A fetch() promise only rejects when a network error 
// is encountered (which is usually when there is a 
// permissions issue or similar.) A fetch()promise 
// does not reject on HTTP errors(404,etc.) .
// insted a then() handler must check the Response.ok 
// and / or Response.status properties.