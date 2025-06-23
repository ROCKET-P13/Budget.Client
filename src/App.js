import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Auth0Provider } from 'react-native-auth0';
import config from '../auth0-configuration';

import { AuthProvider, useAuthState } from './auth/AuthContext';
import Home from './Views/Home';
import Login from './Views/Login';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	const { isAuthenticated } = useAuthState();

	if (isAuthenticated === null) return null; // Optional loading screen

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isAuthenticated ? (
					<Stack.Screen name="Home" component={Home} />
				) : (
					<Stack.Screen name="Login" component={Login} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const App = () => (
	<Auth0Provider domain={config.domain} clientId={config.clientId}>
		<AuthProvider>
			<AppNavigator />
		</AuthProvider>
	</Auth0Provider>
);

export default App;
