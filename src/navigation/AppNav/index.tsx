import { createStackNavigator } from '@react-navigation/stack';
import AppRoute from '../routes';
import LoginScreen from '../../screens/login';
import BottomTabs from '../bottomTabs';
import { useSelector } from 'react-redux';

export const AppNav = () => {
  const Stack = createStackNavigator();
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name={AppRoute.BottomTab} component={BottomTabs} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name={AppRoute.Login} component={LoginScreen} options={{headerShown:false}}/>
      )}
    </Stack.Navigator>
  );
};
