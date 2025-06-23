import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuthState } from '../auth/AuthContext';

const Home = () => {
	const { logout } = useAuthState();

	return (
		<View>
			<Text>Home Page!</Text>
			<Button title="Log Out" onPress={logout} />
		</View>
	);
};

export default Home;
