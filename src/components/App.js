import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import logo from '../logo.svg';
import '../styles/App.css';


const MY_QUERY = gql`
query hello {
  hello(name: "__NAME__") {
    name
  }
}`;

class App extends Component {
  
   render() {

     let { data } = this.props
     console.log(data)
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to Apollo</h2>
           <h3>hhh</h3>
         </div>
       </div>
     );
   }
 }

const AppWithData = graphql(MY_QUERY)(App); 
export default AppWithData;