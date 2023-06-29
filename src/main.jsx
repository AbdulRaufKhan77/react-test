import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloProvider, gql } from '@apollo/client';
import client from './components/appoloClient/client.js';


// client.query({
//   query: gql`
//     query {
//       allFilms {
//         films {
//           director
//           created
//           id
//           title
//         }
//       }
//     }
//   `
// }).then((data) => {
//   console.log('--------------data', data);
// }).catch((err) => {
//   console.log(err?.message);
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider
    client={ client}
   >    
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ApolloProvider>


)
