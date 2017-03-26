// base react component
// all the other react components are loaded from this file

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Search    from './components/Search'
import ShortList from './components/ShortList'
import NamesList from './components/NamesList'
import Credit    from './components/Credit'

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Search />
          <ShortList />
          <NamesList data={this.props.data} />
          <Credit />
        </main>
      </div>
    )
  }
}

export default App;
