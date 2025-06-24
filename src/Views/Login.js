import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthState } from '../auth/AuthContext';
import { Colors } from '../theme';

export default function LoginScreen () {
	const { login } = useAuthState();
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.iconContainer}>
					<Image source={require('../../assets/images/logo.png')} style={styles.iconContainer} />
				</View>
				<Text style={styles.title}>Welcome to Penny!</Text>
				<Text style={styles.subtitle}>As easy as a piggy bank</Text>
			</View>

			<View>
				<TouchableOpacity style={styles.button} onPress={login}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
		justifyContent: 'center',
		paddingHorizontal: 24,
	},
	header: {
		alignItems: 'center',
		marginBottom: 40,
	},
	iconContainer: {
		width: 150,
		height: 150,
		backgroundColor: Colors.primary,
		borderRadius: 75,
		marginBottom: 13,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		color: Colors.textPrimary,
		fontWeight: '600',
		marginTop: 16,
	},
	subtitle: {
		fontSize: 14,
		color: Colors.textSecondary,
	},
	button: {
		backgroundColor: Colors.primary,
		borderRadius: 12,
		paddingVertical: 12,
		alignItems: 'center',
		marginBottom: 12,
		marginHorizontal: 60,
	},
	buttonText: {
		color: Colors.white,
		fontSize: 16,
		fontWeight: '600',
	},
});