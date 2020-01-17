import React from 'react';
import Context from '../Context/Context';

export default class AlgoForm extends React.Component {
  static contextType = Context;

  update = ev => {
    ev.preventDefault();
    const { value } = ev.target;
    const data = value.value;
    this.context.methodUpdate(data);
  };

  render() {
    return (
      <form className='container w-1/3 h-auto' onSubmit={this.update}>
        <div className='mb-6 bg-white shadow-md my-8 rounded pt-6 pb-8 flex items-center flex-col text-left'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='recursion'
          >
            Search Algorithm
          </label>
          <select name='value'>
            <option selected disabled>
              Select A Search Option
            </option>
            <option value='Single-Character'>Single Character</option>
            <option value='All-Characters'>All Characters</option>
            <option value='Single-Word'>Single Word</option>
            <option value='All-Words'>All Words</option>
          </select>
          <p className='text-red-500 text-xs italic'>Please choose a method.</p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={this.context.returnHome}
          >
            Home
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}
