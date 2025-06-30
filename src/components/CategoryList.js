import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../theme';
const CategoryList = ({ categories, sectionTitle }) => {
	return (
		<View style={styles.categoryContainer}>
			<View style={styles.sectionHeader}><Text style={styles.sectionTitle}>{sectionTitle}</Text></View>
			{categories.map(item => (
				<View key={item.id} style={styles.categoryItem}>
					<Text style={styles.categoryName}>{item.name}</Text>
					<Text style={styles.categoryAmount}>${item.amount.toFixed(2)}</Text>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	categoryContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		paddingHorizontal: 20,
		marginBottom: 20,
		marginTop: 20,
	},
	categoryItem: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 14,
		marginBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: Colors.accentPink,
	},
	categoryAmount: {
		fontSize: 16,
		color: '#1A1A40',
	},
	categoryName: {
		fontSize: 16,
		color: '#1A1A40',
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

export default CategoryList;