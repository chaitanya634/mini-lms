import { Redirect, Tabs } from "expo-router";

export default function ProtectedLayout() {

  let isAuthenticated = true

  if (!isAuthenticated) {
    return <Redirect href="/login" />
  }

  return (
    <Tabs>
      <Tabs.Screen name="(tabs)/(course)" options={{ tabBarLabel: "Courses" }} />
      <Tabs.Screen name="(tabs)/profile" options={{ tabBarLabel: 'Profile' }} />
    </Tabs>
  )
}
