import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
      <Stack 
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#f5f5f5' }
        }}
      />
  );
}