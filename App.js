import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {TodoList} from './src/TodosApp/TodoList';

// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TodoList />
    </NavigationContainer>
  );
};

export default App;
