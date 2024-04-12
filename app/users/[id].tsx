import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "../components/Button/Button";

const UserPage = () => {
    const {id} = useLocalSearchParams<{id: string}>();
    return (
        <View>
            <Text>User id = {id}</Text>
            <Button icon="pencil" onPress={() => { } }>
                helo
            </Button>
        </View>
    );
}

export default UserPage;