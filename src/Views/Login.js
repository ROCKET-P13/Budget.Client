import React from 'react';
import { Button, View } from 'react-native';
import { useAuthState } from '../auth/AuthContext';

const Login = () => {
	const { login } = useAuthState();

	return (
		<View>
			<Button title="Log In" onPress={login} />
		</View>
	);
};

export default Login;
