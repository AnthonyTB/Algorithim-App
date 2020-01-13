import React from 'react';

export default class SingleWord extends React.Component {
  singleWord = ev => {
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
    return <h1>Single word</h1>;
  }
}
