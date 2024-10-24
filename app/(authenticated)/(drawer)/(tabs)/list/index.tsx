import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
	return (
		<View style={{ flex: 1 }}>
			<Text>list</Text>
			<Link href={"/(authenticated)/(drawer)/(tabs)/list/42"} asChild>
				<Button title="Go to 42" />
			</Link>
			<Link href={"/(authenticated)/(drawer)/(tabs)/list/5?query=foo"} asChild>
				<Button title="Go to 5" />
			</Link>
			<Link href={"/(authenticated)/details/1337?query=Outside"} asChild>
				<Button title="Go to 1337 outside" />
			</Link>
		</View>
	);
};

export default index;
