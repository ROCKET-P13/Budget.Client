import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryList from '../components/CategoryList';
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
		<>
			<SafeAreaView edges={['top']} style={styles.headerContainer}>
				<Text style={styles.header}>{getMonthYear()}</Text>
			</SafeAreaView>

			<ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
				<CategoryList categories={incomeCategories} sectionTitle={'Income'} />
				<CategoryList categories={expenseCategories} sectionTitle={'Expenses'} />
			</ScrollView>
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
		fontWeight: 'bold',
		color: Colors.white,
		marginBottom: 10,
	},
	month: {
	  fontSize: 20,
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
	scrollContainer: {
		paddingBottom: 20,
		alignItems: 'center',
	},
});
  
export default Home;