// @ts-ignore
import React from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://homework.nextbil.com/graphql',
    cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
