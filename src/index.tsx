// @ts-ignore
import React from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import App from "./App";
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';

const link = createHttpLink({
    uri: 'http://homework.nextbil.com/graphql',
    credentials: 'include'
});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
