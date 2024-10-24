import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const Page = () => {
	const navigation = useNavigation();

	const onToggle = () => {
		navigation.dispatch(DrawerActions.toggleDrawer());
	};
	return (
		<View>
			<Text>Settings</Text>
			<Button title="Toggle" onPress={onToggle} />
		</View>
	);
};

export default Page;
