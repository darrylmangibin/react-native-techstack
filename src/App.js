import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { Header } from './components/common';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Tech Stack" />
        </View>
      </Provider>
    );
  };
};

export default App;