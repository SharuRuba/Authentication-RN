import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import SignInScreen from "./components/SignInScreen";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  const clerkPublishableKey = Constants.expoConfig?.extra?.clerkPublishableKey;

  if (!clerkPublishableKey) {
    console.error("Missing Clerk Publishable Key");
    return null;
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <HomeScreen />
        </SignedIn>
        <SignedOut>
          <SignInScreen />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
