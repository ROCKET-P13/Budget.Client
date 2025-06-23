import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuthState } from '../auth/AuthContext';

const Login = () => {
	const { login } = useAuthState();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Login</Text>
			<Button title="Log In" onPress={login} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		marginBottom: 20,
	},
});

export default Login;