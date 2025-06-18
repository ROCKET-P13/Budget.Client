import { BudgetCategory } from '@/app/(tabs)';
import { StyleSheet, Text, View } from 'react-native';

const Category = ({ id, name, isDebt, plannedAmount, spentAmount }: BudgetCategory) => {
	
	return (
		<View id={id} style={styles.budgetBox}>
			<Text style={styles.label}></Text>
			<Text>Name: {name}</Text>
			<Text>Is Debt: {isDebt}</Text>
			<Text>Planned Amount: {plannedAmount}</Text>
			<Text>Spent Amount: {spentAmount}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#f9f9fb',
	},
	month: {
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 20,
	},
	budgetBox: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 12,
		elevation: 2,
		marginBottom: 30,
	},
	label: {
		fontSize: 14,
		color: '#555',
		marginTop: 10,
	},
	amount: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#333',
	},
	spent: {
		fontSize: 20,
		color: '#e74c3c',
		fontWeight: 'bold',
	},
	remaining: {
		fontSize: 20,
		color: '#2ecc71',
		fontWeight: 'bold',
	},
	recentTitle: {
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 10,
	},
	transactionItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
	},
});

export default Category;