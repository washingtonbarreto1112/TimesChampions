import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RotasTab from './pages/RotasTab.js'; 

export default function App() {
  return (
    <NavigationContainer>
        <RotasTab />
    </NavigationContainer>
  );
}
