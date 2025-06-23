import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthState } from '../auth/AuthContext';
import { colors } from '../theme';

const Settings = () => {
	const { logout } = useAuthState();

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Settings</Text>

			<TouchableOpacity style={styles.logoutButton} onPress={logout}>
				<Text style={styles.logoutText}>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		paddingHorizontal: 20,
		paddingTop: 60,
	},
	header: {
		fontSize: 28,
		fontWeight: 'bold',
		color: colors.textPrimary,
		marginBottom: 30,
	},
	settingText: {
		fontSize: 16,
		color: colors.textSecondary,
	},
	logoutButton: {
		marginTop: 40,
		marginRight: 40,
		marginLeft: 40,
		backgroundColor: colors.error,
		paddingVertical: 12,
		borderRadius: 8,
		alignItems: 'center',
	},
	logoutText: {
		color: colors.background,
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default Settings;
