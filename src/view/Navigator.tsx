import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './layouts/app/Home/Home';

const Navigator: React.FC = () => (
  <NavigationContainer>
    <Home />
  </NavigationContainer>
);

export default Navigator;
