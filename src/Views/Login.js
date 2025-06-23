import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthState } from '../auth/AuthContext';
import { colors } from '../theme';

const Login = () => {
	const { login } = useAuthState();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome Back</Text>
			<Text style={styles.subtitle}>Login to manage your budget</Text>
			<TouchableOpacity style={styles.loginButton} onPress={login}>
				<Text style={styles.loginButtonText}>Log In</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: colors.textPrimary,
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		color: colors.textSecondary,
		marginBottom: 30,
	},
	loginButton: {
		backgroundColor: colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 8,
	},
	loginButtonText: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
export default Login;