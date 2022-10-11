import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require("./assets/codimaths_logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Take a leap in learning!! </Text>
        <Text style={styles.text}>Experience a new style of learning</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInscreen")}>
            <LinearGradient
              colors={["#38b6ff", "#5ce1e6"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#ffffff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  motto: {
    fontSize: 25,
  },
  footer: {
    flex: 1,
    backgroundColor: "#4046af",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo * 2.0,
    height: height_logo,
  },
  title: {
    color: "#c6d2e9",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 200,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
