import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { View, Text } from "react-native";

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.background,
				},
				headerTintColor: "#fff",
			}}
		>
			<Stack.Screen name="index" options={{ title: "List" }} />
			<Stack.Screen name="[id]" options={{ title: "" }} />
		</Stack>
	);
};

export default Layout;
