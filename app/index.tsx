import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Button } from "./components/Button/Button";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { SessionCard } from "./components/SessionCard/SessionCard";
import { Location } from "./constants/types";

export default function Page() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
          <Link href="/users/1">Go to user 1</Link>
          <Pressable onPress={() => router.push({
            pathname: "/users/[id]",
            params: { id: "2" }
          })}>
            <Text>Go to user 2</Text>
          </Pressable>
          <Button onPress={() => console.log("Button clicked")}>
            Click me!
          </Button>
          <br />
          <ProgressBar progress={16/17} total={17} current={16}/>
          <br />
          <SessionCard 
            date={new Date()}
            place={Location.BADMINTON_VANCOUVER}
            totalCost={65.51}
            start={1712912454}
            end={1712919654}
          />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
