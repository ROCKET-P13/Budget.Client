import { IconSymbol } from '@/components/IconSymbol';
import { Tabs } from 'expo-router';

const TabLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="Profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;