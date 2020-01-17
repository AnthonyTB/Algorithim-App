import React from 'react';
import Context from '../../Components/Context/Context';

export default class AlgoForm extends React.Component {
  static contextType = Context;

  type = ev => {
    ev.preventDefault();
    const { value } = ev.target;
    const data = value.value;
    this.context.typeUpdate(data);
  };

  render() {
    return (
      <div className='container w-1/3 h-auto '>
        <form className='mx-auto' onSubmit={this.type}>
          <div className='mb-6 bg-white shadow-md my-8 rounded pt-6 pb-8 flex items-center flex-col text-left'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 '
              for='recursion'
            >
              Algorithm Selection
            </label>
            <select name='value' className=''>
              <option selected disabled>
                Select A Type
              </option>
              <option value='Search'>Search</option>
              <option value='Recursion'>Recursion</option>
              <option value='Sorting'>Sorting</option>
            </select>
            <p className='text-gray-500 text-xs italic'>
              Please choose a algorithm type.
            </p>
          </div>
          <div className='block items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right'
              type='submit'
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
