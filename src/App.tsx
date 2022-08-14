import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './application/store/Store';
import Navigator from './pages/Navigator';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
