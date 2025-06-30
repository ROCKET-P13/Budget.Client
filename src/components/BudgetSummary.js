import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../theme';

const BudgetSummary = ({ budget }) => {
	const plannedTotal = budget.categories.reduce((sum, cat) => sum + (cat.amount || 0), 0);

	return  (
		<View style={styles.summaryContainer}>
			<Text style={styles.summaryLabel}>Planned Income</Text>
			<Text style={styles.summaryAmount}>${plannedTotal.toLocaleString()}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	summaryContainer: {
		width: '90%',
		backgroundColor: Colors.white,
		padding: 20,
		borderRadius: 16,
		marginTop: 20,
		alignItems: 'center',
	},
	summaryLabel: {
		fontSize: 16,
		color: Colors.textSecondary,
		marginBottom: 8,
		fontWeight: 'bold',
	},
	summaryAmount: {
		fontSize: 28,
		fontWeight: 'bold',
		color: Colors.accentPink,
	},
});

export default BudgetSummary;