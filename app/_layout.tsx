import Colors from "@/constants/Colors";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function InitialLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	const { token, initialized } = useAuth();
	const router = useRouter();
	const segments = useSegments();

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	console.log("initialized", initialized);
	console.log("segments", segments);
	console.log("token", token);

	useEffect(() => {
		if (!initialized) return;

		const inAuthGroup = segments[0] === "(authenticated)";
		if (token && !inAuthGroup) {
			router.replace("/(authenticated)/(drawer)/(tabs)/home");
		} else if (!token && inAuthGroup) {
			router.replace("/");
		}
	}, [token, initialized]);

	if (!loaded || !initialized) {
		return <Slot />;
	}
	return (
		<>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: Colors.background,
					},
					headerTintColor: "#fff",
				}}
			>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen
					name="register"
					options={{
						title: "Create Account",
						headerBackTitle: "Login",
					}}
				/>
				<Stack.Screen
					name="privacy"
					options={{
						title: "Privacy Policy",
						presentation: "modal",
					}}
				/>
				<Stack.Screen
					name="(authenticated)"
					options={{
						headerShown: false,
					}}
				/>
			</Stack>
		</>
	);
}

export default function RootLayout() {
	return (
		<AuthProvider>
			<InitialLayout />
		</AuthProvider>
	);
}
