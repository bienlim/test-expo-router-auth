import Colors from "@/constants/Colors";
import { AuthProvider } from "@/context/AuthContext";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<AuthProvider>
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
		</AuthProvider>
	);
}
