import React from 'react';

export default class AllWord extends React.Component {
  allWord = ev => {
    ev.preventDefault();
    const { characterData, testData } = ev.target;
    const character = characterData.value;
    let counter = 0;
    const data = testData.value.split('');
    for (let i of data) {
      if (i == character) {
        counter++;
      }
    }
    this.setState({ count: counter });
  };

  render() {
    return <h1>All words</h1>;
  }
}
