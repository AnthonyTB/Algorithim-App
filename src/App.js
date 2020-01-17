import React from 'react';
import AlgoForm from './Routes/Home/AlgoForm';
import Search from './Components/Forms/SearchForm';
import { Route, Switch, withRouter } from 'react-router-dom';
import Context from './Components/Context/Context';

class App extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      type: '',
      method: ''
    };
  }

  typeUpdate = newVal => {
    console.log('hi');
    this.setState({ type: newVal }, () => {
      this.direct(newVal);
    });
  };

  methodUpdate = newVal => {
    console.log('method');
    this.setState({ method: newVal }, () => {
      this.direct(newVal);
    });
  };

  returnHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  direct = path => {
    console.log(path);
    this.props.history.push(path);
  };

  render() {
    return (
      <Context.Provider
        value={{
          returnHome: this.returnHome,
          direct: this.direct,
          state: this.state,
          methodUpdate: this.methodUpdate,
          typeUpdate: this.typeUpdate
        }}
      >
        <div className='w-full flex h-screen bg-gray-300 justify-center flex-col items-center'>
          <header>
            <h1 className='block text-gray-700 text-xl font-bold mb-2 uppercase'>
              The tool of all tools
            </h1>
          </header>
          <Switch>
            <Route
              exact
              path='/'
              render={routeProps => {
                return <AlgoForm {...routeProps} />;
              }}
            />
            <Route
              exact
              path='/Search'
              render={routeProps => {
                return <Search {...routeProps} />;
              }}
            />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}

export default withRouter(App);
