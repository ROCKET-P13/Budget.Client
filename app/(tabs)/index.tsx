import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export type Category = {
	id: string;
	name: string;
	isDebt: boolean;
	plannedAmount: number
	spentAmount: number 
}

export type Budget = {
	id?: string;
	name?: string;
	totalPlannedAmount?: number;
	categories?: Category[]
}

const Home = () => {
	const [budget, setBudget] = useState<Budget>({});

	const fetchBudget = async () => {
		try {
			const response: AxiosResponse = await axios.get('http://localhost:5242/api/budget/latest');
			setBudget(response.data);
		} catch (error) {
			console.error('Error getting budget:', error);
		}
	};
	
	useEffect(() => {
		fetchBudget();
	}, []);
	return (
		<View style={styles.container}>
		  <Text style={styles.budgetTitle}>{budget.name}</Text>
		  <Text style={styles.totalPlanned}>Total Planned: ${budget.totalPlannedAmount}</Text>
	
		  <FlatList
				data={budget.categories}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
			  <View style={styles.categoryItem}>
						<View>
							<Text style={styles.categoryName}>{item.name}</Text>
							<Text style={styles.categoryAmounts}>Planned: ${item.plannedAmount} | Spent: ${item.spentAmount}</Text>
						</View>
			  </View>
				)}
		  />
		</View>
	  );
};

const styles = StyleSheet.create({
	container: {
	  paddingTop: 30,
	  paddingHorizontal: 20,
	  flex: 1,
	  backgroundColor: '#fff',
	},
	budgetTitle: {
	  fontSize: 28,
	  fontWeight: 'bold',
	  marginBottom: 10,
	},
	totalPlanned: {
	  fontSize: 18,
	  marginBottom: 20,
	},
	sectionTitle: {
	  fontSize: 20,
	  fontWeight: '600',
	  marginBottom: 10,
	},
	categoryItem: {
	  backgroundColor: '#f5f5f5',
	  padding: 15,
	  borderRadius: 8,
	  marginBottom: 10,
	},
	categoryName: {
	  fontSize: 16,
	  fontWeight: '500',
	},
	categoryAmounts: {
	  fontSize: 14,
	  color: '#333',
	  marginTop: 4,
	},
});

export default Home;