import React from 'react';

const Context = React.createContext({
  returnHome: () => {},
  direct: () => {},
  typeUpdate: () => {},
  methodUpdate: () => {},
  state: ''
});

export default Context;
