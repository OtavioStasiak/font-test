import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// You can import supported modules from npm

// or any files within the Snack

const Message = () => {
  return (
    <View style={styles.paragraph}>
      <View style={styles.avatar} />
      <View style={styles.test}>
        <Text>Teste. 101010</Text>
        <Text style={styles.text}>
          Perfect. I will let them know. Thank you. Also happy to look at the
          FileValut stuff with you.
        </Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  const array = new Array(50);
  const renderItem = ({ item }) => <Message />;

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    flex: 1,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  test: {
    paddingHorizontal: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#000",
  },
});
