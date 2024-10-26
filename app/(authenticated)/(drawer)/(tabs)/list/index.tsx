import { useAuth } from "@/context/AuthContext";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
const Page = () => {
	const { token } = useAuth();
	console.log("list token  ", token);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		loadTodos();
	}, []);

	const loadTodos = async () => {
		const response = await fetch("/api/todos", {
			headers: {
				Authorization: `${token}`,
			},
		});

		const data = await response.json();
		setTodos(data);
	};

	return (
		<View style={{ flex: 1 }}>
			<Text>List</Text>
			<Link href={"/(authenticated)/(drawer)/(tabs)/list/42"} asChild>
				<Button title="Go to 42" />
			</Link>
			<Link href={"/(authenticated)/(drawer)/(tabs)/list/5?query=foo"} asChild>
				<Button title="Go to 5" />
			</Link>

			<Link href={"/(authenticated)/details/1337?query=whatever"} asChild>
				<Button title="Go to 1337 outside" />
			</Link>

			<FlatList
				data={todos}
				keyExtractor={(item: any) => item._id}
				renderItem={({ item }) => (
					<Link
						href={`/(authenticated)/(drawer)/(tabs)/list/${item._id}`}
						asChild
					>
						<TouchableOpacity style={{ padding: 10, height: 44 }}>
							<Text>{item.task}</Text>
						</TouchableOpacity>
					</Link>
				)}
			/>
		</View>
	);
};
export default Page;
