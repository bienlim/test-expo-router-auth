import { Stack } from "expo-router";
import { View, Text } from "react-native";

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
			<Stack.Screen name="details/[id]" />
		</Stack>
	);
};

export default Layout;
