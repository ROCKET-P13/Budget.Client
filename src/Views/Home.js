import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../theme';

const getMonthYear = () => {
	const date = new Date();
	return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
};

const Home = () => {

	return (
		<View style={styles.container}>
			<Text style={styles.header}>{getMonthYear()}</Text>
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
	month: {
	  fontSize: 20,
	  fontWeight: '600',
	  color: Colors.textPrimary,
	},
	budgetLabel: {
	  fontSize: 16,
	  color: Colors.textSecondary,
	  marginTop: 8,
	},
	budgetAmount: {
	  fontSize: 32,
	  fontWeight: 'bold',
	  color: Colors.primary,
	  marginTop: 4,
	},
});
  
export default Home;