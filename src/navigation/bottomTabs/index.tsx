import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import AppRoute from '../routes';
import EventScreen from '../../screens/event/index';
import SearchScreen from '../../screens/search/inex';
import FavoriteScreen from '../../screens/favourite/inex';
import ProfileScreen from '../../screens/profile/inex';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === AppRoute.Search) iconName = 'search';
          if (route.name === AppRoute.Events) iconName = 'calendar';
          if (route.name === AppRoute.Favorites) iconName = 'heart';
          if (route.name === AppRoute.Profile) iconName = 'user';

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name={AppRoute.Search} component={SearchScreen} />
      <Tab.Screen name={AppRoute.Events} component={EventScreen} />
      <Tab.Screen name={AppRoute.Favorites} component={FavoriteScreen} />
      <Tab.Screen name={AppRoute.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;