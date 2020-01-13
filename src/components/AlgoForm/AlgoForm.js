import React from 'react';
import SingleCharacter from '../Recursion/SingleCharacter';
import SingleWord from '../Recursion/SingleWord';
import AllCharacter from '../Recursion/AllCharacter';
import AllWord from '../Recursion/AllWord';

export default class AlgoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ''
    };
  }

  option = ev => {
    ev.preventDefault();
    const { value } = ev.target;
    const data = value.value;
    this.setState({ option: data });
    this.push();
  };

  push = () => {
    switch (this.state.option) {
      case 'singleCharacter':
        return <SingleCharacter />;
      case 'allCharacter':
        return <AllCharacter />;
      case 'singleWord':
        return <SingleWord />;
      case 'allWord':
        return <AllWord />;
    }
  };

  render() {
    console.log(`Search Option, ${this.state.option}`);
    return (
      <div className='algoForm'>
        <form onSubmit={this.option}>
          <select name='value'>
            <option selected disabled>
              Select A Search Option
            </option>
            <option value='singleCharacter'>Single Character</option>
            <option value='allCharacter'>All Characters</option>
            <option value='singleWord'>Single Word</option>
            <option value='allWord'>All Words</option>
          </select>
          <div className='btnArea'>
            <button>Next</button>
          </div>
        </form>
        {this.push()}
      </div>
    );
  }
}
