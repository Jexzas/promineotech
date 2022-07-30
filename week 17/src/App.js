import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { 
        count: state.count + 1
      }
      break;
    case 'DECREMENT': 
      return {
        count: state.count - 1
      }
      break;
    default: 
      break;
  }
};


const store = createStore(reducer);

function App() {
  // const HelloWithRedBorder = withRedBorder(Hello);
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}


export default App;
