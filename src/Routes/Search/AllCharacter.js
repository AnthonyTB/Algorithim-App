import React from 'react';

export default class AllCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      data: '',
      characters: ''
    };
  }

  allCharacters = ev => {
    ev.preventDefault();
    const { testData } = ev.target;
    this.setState({ characters: testData.value.split('') });
    const results = this.state.characters.map(char => {});
  };

  results = () => {
    return (
      <div>
        <span></span>
        <p>{this.state.data}</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.singleCharacter}>
          <label
            class='block text-gray-700 text-sm font-bold mb-2'
            for='characterData'
          >
            character
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='characterData'
            type='text'
          />
          <label
            class='block text-gray-700 text-sm font-bold mb-2'
            for='characterData'
          >
            Insert your data
          </label>
          <textarea
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='testData'
          />
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='reset'
            >
              Clear
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={this.props.return}
            >
              Go Back
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
