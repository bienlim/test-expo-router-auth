import Colors from "@/constants/Colors";
import { Drawer } from "expo-router/drawer";

const Layout = () => {
	return (
		<Drawer
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.background,
				},
				headerTintColor: "#fff",
				drawerActiveBackgroundColor: Colors.primary,
				drawerActiveTintColor: "#fff",
			}}
		>
			<Drawer.Screen
				name="(tabs)"
				options={{ headerShown: false, drawerLabel: "Home" }}
			/>
			<Drawer.Screen name="settings" options={{ title: "Settings" }} />
		</Drawer>
	);
};

export default Layout;