import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const Budgets = () => {
	const [budgets, setBudgets] = useState<any>([]);
	
	const fetchBudgets = async () => {
		try {
			const response: AxiosResponse = await axios.get('http://localhost:5242/api/budget');
			setBudgets(response.data);
		} catch (error) {
			console.error('Error getting budgets', error);
		}
	};

	useEffect(() => {
		fetchBudgets();
	}, []);

	return (
		<View style={{ padding: 20 }}>
			<Text style={{ fontSize: 24 }}>Budgets</Text>
			<FlatList
				data={budgets}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Text>Budget Id: {item.id}</Text>
				)}
			/>
		</View>
	);
};

export default Budgets;