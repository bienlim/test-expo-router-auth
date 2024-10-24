import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.background,
				},
				headerTintColor: "#fff",
				headerRight: () => (
					<Link href={"/"} replace asChild>
						<Ionicons name="log-out-outline" size={24} color="#fff" />
					</Link>
				),
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
				name="profile"
				options={{
					title: "My Profile",
					tabBarLabel: "Profile",
					tabBarIcon: ({ size, color }) => (
						<Ionicons name="person-circle-outline" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default Layout;