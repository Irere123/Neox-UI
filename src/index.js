import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  networkInterface,
});
const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
