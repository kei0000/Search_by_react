import React, { Component } from 'react'

class NamesList extends Component {
  render() {
    // this.props.data is passed from App.js - <NamesList data={this.props.data} />
    console.log('our data is', this.props.data);
    const { data } = this.props

    // ES2015(ES6) way of loop (name => ) http://qiita.com/yukinoyoshino/items/15359535a834832e08ea
    const namesList = data.map(name => {
      // if you use "" instead of (), doesn't work. show string (ex. name.id) as is
      return ( <li key={name.id} className={name.sex}>{name.name}</li> );
    });

    /* original
    const namesList2 = data.map(name => {
      return (
        <li className={name.sex}>{name.name}</li>
      )
    });
    */

    return (
      // default <div className="App">
      <div className="MyApp">
        <ul>
          {namesList}
        </ul>
      </div>
    );
  }
}


// this will make a module accessible from other files
export default NamesList;
