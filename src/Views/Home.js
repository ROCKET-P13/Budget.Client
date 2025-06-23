import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

const Home = () => {

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Home</Text>
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
});

export default Home;