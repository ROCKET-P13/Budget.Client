import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../theme';

const getMonthYear = () => {
	const date = new Date();
	return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
};

// TODO: actually hook it up to the server
const mockBudgetData = {
	id: 1,
	categories: [
		{ id: 1, name: 'Direct Deposit One', amount: 400, type: 'income' },
		{ id: 2, name: 'Direct Deposit Two', amount: 400, type: 'income' },
		{ id: 2, name: 'Tithe', amount: 1200, type: 'expense' },
		{ id: 3, name: 'Emergency Fund', amount: 150, type: 'expense'  },
		{ id: 4, name: 'Rent', amount: 100, type: 'expense'  },
		{ id: 5, name: 'Electricity', amount: 100, type: 'expense'  },
		{ id: 6, name: 'Phone', amount: 100, type: 'expense'  },
		{ id: 7, name: 'Pets', amount: 100, type: 'expense'  },
		{ id: 8, name: 'Gas', amount: 100, type: 'expense'  },
		{ id: 9, name: 'Groceries', amount: 100, type: 'expense'  },
		{ id: 10, name: 'Date Nights', amount: 100, type: 'expense'  },
		{ id: 11, name: 'Barber', amount: 100, type: 'expense' },
		{ id: 12, name: 'Miscellaneous', amount: 100, type: 'expense'  },
		{ id: 13, name: 'Car Insurance', amount: 100, type: 'expense'  },
		{ id: 14, name: 'Renters Insurance', amount: 100, type: 'expense'  },
		{ id: 15, name: 'Tundra', amount: 100, type: 'expense'  },
		{ id: 16, name: 'Student Loans', amount: 100, type: 'expense' },

	],
};

const Home = () => {
	const [budget, setBudget] = useState(null);

	useEffect(() => {
		setBudget(mockBudgetData);
	}, []);

	const incomeCategories = budget?.categories.filter((cat) => cat.type === 'income') || [];
	const expenseCategories = budget?.categories.filter((cat) => cat.type === 'expense') || [];
	return (
		<View style={styles.container}>
			<Text style={styles.header}>{getMonthYear()}</Text>
			<ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
				<View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Income</Text></View>
				{incomeCategories.map((item) => (
					<View key={item.id} style={styles.categoryItem}>
						<Text style={styles.categoryName}>{item.name}</Text>
						<Text style={styles.categoryAmount}>${item.amount.toFixed(2)}</Text>
					</View>
				))}

				<View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Expenses</Text></View>
				{expenseCategories.map((item) => (
					<View key={item.id} style={styles.categoryItem}>
						<Text style={styles.categoryName}>{item.name}</Text>
						<Text style={styles.categoryAmount}>${item.amount.toFixed(2)}</Text>
					</View>
				))}
			</ScrollView>
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
	categoryList: {
		alignItems: 'center',
		paddingBottom: 24,
	},
	scrollContainer: {
		paddingBottom: 20,
		alignItems: 'center',
	  },
	categoryItem: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		paddingVertical: 16,
		paddingHorizontal: 20,
		marginBottom: 16,
		borderColor: '#C1C8CD',
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	categoryName: {
		fontSize: 16,
		color: '#1A1A40',
		fontWeight: '500',
	},
	categoryAmount: {
		fontSize: 16,
		color: '#1A1A40',
		fontWeight: '600',
	},
	sectionHeader: {
		marginTop: 16,
		marginBottom: 16,
		width: '90%',
		alignItems: 'flex-start',
	  },
	  sectionTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: '#1A1A40',
	  },
});
  
export default Home;