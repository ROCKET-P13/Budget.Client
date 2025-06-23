import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuthState } from '../auth/AuthContext';

const Settings = () => {
	const { logout } = useAuthState();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Settings</Text>
			<Button title="Log Out!" onPress={logout} />

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

export default Settings;
