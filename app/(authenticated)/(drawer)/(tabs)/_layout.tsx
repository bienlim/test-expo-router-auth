import Colors from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link, Tabs } from "expo-router";
import { Alert, TouchableOpacity } from "react-native";
const Layout = () => {
	const { onLogout } = useAuth();

	return (
		<Tabs
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.background,
				},
				headerTintColor: "#fff",
				headerRight: () => (
					<TouchableOpacity onPress={onLogout}>
						<Ionicons name="log-out-outline" size={24} color="#fff" />
					</TouchableOpacity>
				),
				headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "My Homefeed",
					tabBarLabel: "Home",
					tabBarIcon: ({ size, color }) => (
						<Ionicons name="home-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="action"
				options={{
					tabBarLabel: "Action",
					tabBarIcon: ({ size, color }) => (
						<Ionicons name="add-circle-outline" size={size} color={color} />
					),
				}}
				listeners={() => ({
					tabPress: (e) => {
						e.preventDefault();
						Alert.alert("Action", "You clicked the action button.");
					},
				})}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "My Profile",
					tabBarLabel: "Profile",
					tabBarIcon: ({ size, color }) => (
						<Ionicons name="person-circle-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="list"
				options={{
					tabBarLabel: "List",
					headerShown: false,
					tabBarIcon: ({ size, color }) => (
						<Ionicons name="list-outline" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default Layout;
