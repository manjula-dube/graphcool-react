import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import logo from '../logo.svg';
import '../styles/App.css';


const MY_QUERY = gql`query {
   message { 
     text
  }
}`;

class App extends Component {
  
   render() {

     let { data } = this.props
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to Apollo</h2>
           <h3>{data.message.text}</h3>
         </div>
       </div>
     );
   }
 }

App = graphql(MY_QUERY)(App); 
export default App;