import React from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, ApolloLink, concat } from '@apollo/client';
import { onError } from '@apollo/client/link/error'
import { GetBots } from './components/getBots';
import { setContext } from '@apollo/client/link/context';
import { Grid } from './styled/container';
import { Channel } from './components/component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { login } from './actions/login';

const link = from([
  new HttpLink({ uri: 'https://cocohub.ai/graphql' }),
])

const appJWTToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyX2lkIjoyNjYzLCJhdWQiOiJwb3N0Z3JhcGhpbGUifQ.31R0Fg-3XWlJtmEn66tR3A_T86XgjlAEdbE0WKj5p80"

const authMiddleware = new ApolloLink((operation, forward) => {
  if (appJWTToken) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${appJWTToken}`
      }
    });
  }
  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, link),
})

function App() {
  let isConnected = useSelector((state: RootState) => {
    return state.isLogged;
  })
  return (
    <div>
      <Grid>
        <Channel name='Messanger' bartitle={isConnected ? 'Edit' : 'Connect'} state={isConnected ? true : false} maintext='Bla bla bla' />
        <Channel name='Video Channels' bartitle={isConnected ? 'Edit' : 'Connect'} state={isConnected ? true : false} maintext='Hello everyone' />
        <Channel name='Channels' bartitle={isConnected ? 'Edit' : 'Connect'} state={isConnected ? true : false} maintext='I want to work here' />
      </Grid>

    </div >


  );
}

export default App;
