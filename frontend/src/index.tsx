//CORE
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import CssBaseline from 'template-core/CssBaseline';
import { ThemeProvider } from 'template-core/styles';
import {
  BrowserRouter,
} from "react-router-dom";
import { theme } from './components/theme/theme';
import UserSession from "./components/core/session/User.Session";
import { GraphQLClient, ClientContext } from 'graphql-hooks'
// import { GraphQLClient } from "graphql-request";


// const client = new GraphQLClient('http://localhost:4009/graphql')
// export const Client = React.createContext({
//   client
// })
const client = new GraphQLClient({
  url: '/graphql'
})


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter basename="/app">
      <ClientContext.Provider value={client}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <UserSession/>
        </ThemeProvider>
      </ClientContext.Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
