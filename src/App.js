import React from 'react';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { reducers } from './ReduxLogic/Reducers';
import './App.css';
import CustomToolbar from './Components/CustomToolbar/CustomToolbar';
import BacksideDrawer from './Components/BacksideDrawer/BacksideDrawer';
import MainFrame from './Components/Frames/MainFrame/MainFrame';

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <CustomToolbar />
          <BacksideDrawer />
          <MainFrame />
      </Provider>         
    </div>
  );
}

export default App;
