import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home, DetailInfo, Jangkar, Model, Pukulan, ComingSoon, SikapSempurna, HormatBN, Tendangan, Lainnya, Capaian} from '../../container/pages';

const Stack = createStackNavigator();

const Router = () => {
  return(
    <Stack.Navigator initialRouteName="Spalsh">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false,}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
      <Stack.Screen name="DetailInfo" component={DetailInfo} options={{headerShown: false,}}/>
      <Stack.Screen name="Jangkar" component={Jangkar} options={{headerShown: false,}}/>
      <Stack.Screen name="Pukulan" component={Pukulan} options={{headerShown: false,}}/>
      <Stack.Screen name="ComingSoon" component={ComingSoon} options={{headerShown: false,}}/>
      <Stack.Screen name="SikapSempurna" component={SikapSempurna} options={{headerShown: false,}}/>
      <Stack.Screen name="HormatBN" component={HormatBN} options={{headerShown: false,}}/>
      <Stack.Screen name="Tendangan" component={Tendangan} options={{headerShown: false,}}/>
      <Stack.Screen name="Lainnya" component={Lainnya} options={{headerShown: false,}}/>
      <Stack.Screen name="Capaian" component={Capaian} options={{headerShown: false,}}/>
      <Stack.Screen name="Model" component={Model} options={{headerShown: false,}}/>
    </Stack.Navigator>
  );
};

export default Router;