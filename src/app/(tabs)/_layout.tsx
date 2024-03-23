import { Tabs } from "expo-router";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { theme } from "@/theme";
import Avatar from "@/components/Avatar";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor:theme.colors.white,
            tabBarInactiveTintColor:theme.colors.gray[600],
            tabBarStyle:{
                backgroundColor: theme.colors.black,
                borderColor:theme.colors.black,
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ size, color }) => <Foundation name="home" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="chatbubble-ellipses" size={size} color={color} />
                }}
                name="messages"
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({color}) => <Avatar selected={color === theme.colors.white} source={{uri:"https://github.com/guilhermeverissimo14.png"}}/>
                }}
                name="profile"
            />
        </Tabs>
    )
}