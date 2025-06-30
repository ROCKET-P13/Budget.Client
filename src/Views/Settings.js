import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthState } from '../auth/AuthContext';
import { Colors } from '../theme';

const Settings = () => {
	const { logout } = useAuthState();

	return (
		<>
			<SafeAreaView edges={['top']} style={styles.headerContainer}>
				<Text style={styles.header}>Settings</Text>
			</SafeAreaView>

			<View style={styles.container}>
				<Pressable style={({ pressed  }) => [
					styles.logoutButton,
					{ opacity: pressed ? 0.7 : 1 },
				]} onPress={logout}>
					<Text style={styles.logoutText}>Log Out</Text>
				</Pressable>
			</View>
		</>

	);
};

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: Colors.accentPink,
		alignItems: 'flex-start',
		paddingHorizontal: 20,
	},
	container: {
		flex: 1,
		backgroundColor: Colors.white,
		paddingHorizontal: 20,
		paddingTop: 60,
	  },
	header: {
		fontSize: 28,
		fontWeight: '500',
		color: Colors.white,
		marginBottom: 10,
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
