import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Home from '../Views/Home';
import Settings from '../Views/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
