import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Namespace
import { NavigatorRoutes } from './navigation.namespace';
// Screens
import { FiveDaysWeather, OneDayWeather } from '../modules';

export type RootStackParamList = {
  [NavigatorRoutes.FiVE_DAYS_WEATHER]: undefined;
  [NavigatorRoutes.ONE_DAY_WEATHER]: { day: number };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackNavigation: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name={NavigatorRoutes.FiVE_DAYS_WEATHER}
        component={FiveDaysWeather}
        options={{ title: 'Five days weather' }}
      />
      <Screen
        name={NavigatorRoutes.ONE_DAY_WEATHER}
        component={OneDayWeather}
        options={{ title: 'One day weather' }}
      />
    </Navigator>
  );
};

export default StackNavigation;
