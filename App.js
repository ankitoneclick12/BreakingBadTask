import React from 'react';
import HomeStackNavigator from './src/Navigators/HomeStackNavigator';
import {legacy_createStore as createStore} from 'redux';
import CharactersReducer from './src/Reducres/reducers';
import {Provider} from 'react-redux';

const App = () => {
  const store = createStore(CharactersReducer);

  return (
    <Provider store={store}>
      <HomeStackNavigator />
    </Provider>
  );
};

export default App;
