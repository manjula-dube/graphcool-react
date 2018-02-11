import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import logo from '../logo.svg';
import '../styles/App.css';


const ChannelsList = ({ data: {loading, error, channels }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <ul>
    { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
  </ul>;
};

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);


const HelloWorld = () =>
     (<ul>
       <li>HelloWorld</li>
     </ul>);
class App extends Component {
   render() {
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to Apollo</h2>
         </div>
         <HelloWorld />
       </div>
     );
   }
 }
export default App;