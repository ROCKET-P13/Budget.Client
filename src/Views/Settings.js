import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuthState } from '../auth/AuthContext';
import { Colors } from '../theme';

const Settings = () => {
	const { logout } = useAuthState();

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Settings</Text>
			<Pressable style={({ pressed  }) => [
				styles.logoutButton,
				{ opacity: pressed ? 0.7 : 1 },
			]} onPress={logout}>
				<Text style={styles.logoutText}>Log Out</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
		paddingHorizontal: 20,
		paddingTop: 60,
	},
	header: {
		fontSize: 28,
		fontWeight: 'bold',
		color: Colors.accentPink,
		marginBottom: 30,
	},
	settingText: {
		fontSize: 16,
		color: Colors.textSecondary,
	},
	logoutButton: {
		backgroundColor: Colors.white,
		borderColor: Colors.accentPink,
		borderWidth: 2,
		borderRadius: 12,
		paddingVertical: 12,
		alignItems: 'center',
		marginBottom: 12,
		marginHorizontal: 60,
	},
	logoutText: {
		color: Colors.accentPink,
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default Settings;
