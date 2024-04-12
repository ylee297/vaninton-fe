import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{
                    headerTitle: "Home"
                }}
            />
            <Stack.Screen 
                name="users/[id]" 
                options={{
                    headerTitle: "User Page",
                }}
            />
        </Stack>
    );
};

export default RootLayout;