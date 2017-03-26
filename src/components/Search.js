import React, { Component } from 'react'

class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value
    // console.log(val)
    var elms = document.querySelectorAll('li');
    for (var i = 0, len = elms.length; i < len; i++) {
      var elm = elms[i];
      // console.log(elm.innerHTML)
      if (elm.innerHTML.match(val)) {
        elm.style.display="inline-block"
      } else {
        elm.style.display="none"
      }
    }
  }

  render() {
    // about syntax of value =>  http://qiita.com/yukinoyoshino/items/15359535a834832e08ea
    // * 'value' is argument, in this case, value of textbox
    return (
      <header>
        <form>
          <input type="text" placeholder="Type to filter..." onChange={ this.filterUpdate.bind(this) }
                 ref={ value => this.myValue = value }
          />
        </form>
      </header>
    )
  }
}

export default Search;
