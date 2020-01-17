import React from 'react';

export default class SingleCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      data: '',
      character: ''
    };
  }

  singleCharacter = ev => {
    ev.preventDefault();
    const { characterData, testData } = ev.target;
    this.setState({ character: characterData.value, data: testData.value });
    const character = characterData.value;
    let counter = 0;
    const data = testData.value.split('');
    for (let i of data) {
      if (i === character) {
        counter++;
      }
    }
    this.setState({ count: counter });
  };

  results = () => {
    return (
      <div className='mb-6 bg-white shadow-md my-8 rounded pt-6 pb-8 flex items-center flex-col text-left'>
        <span>
          {this.state.character}: {this.state.count}
        </span>
        <p>{this.state.data}</p>
      </div>
    );
  };

  clearResults = () => {
    this.setState({ character: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.singleCharacter}>
          <div className='mb-6 bg-white shadow-md my-8 rounded pt-6 pb-8 flex items-center flex-col text-left'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='characterData'
            >
              character
            </label>
            <input
              class='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300'
              name='characterData'
              type='text'
              maxLength='1'
            />
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='characterData'
            >
              Insert your data
            </label>
            <textarea
              class='shadow appearance-none border w-1/2 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300'
              name='testData'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={this.props.return}
            >
              Go Back
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='reset'
              onClick={this.clearResults}
            >
              Clear
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Results
            </button>
          </div>
        </form>
        {this.state.character.length > 0 ? this.results() : ''}
      </div>
    );
  }
}
