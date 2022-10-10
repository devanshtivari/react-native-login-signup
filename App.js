import React from "react";
import {View,Text,TouchableOpacity,StyleSheet, Dimensions, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/codimaths_logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text style={styles.motto}>Gain Wisdom</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay connected with everyone!! </Text>
        <Text style={styles.text}>Sign in with Account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons
                name="navigate-next"
                color="#ffffff"
                size={20}
              />

            </LinearGradient>
          </TouchableOpacity>
        </View> 
      </View>
    </View>
  );
}

const {height} = Dimensions.get("screen");
const height_logo = height*0.30;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff"
  },
  header: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  motto:{
    fontSize: 25
  },
  footer: {
    flex:1,
    backgroundColor: "blue",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo:{
    width: height_logo,
    height: height_logo
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold"
  },
  text:{
    color: "grey",
    marginTop:5
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign:{
    color: 'white',
    fontWeight: 'bold'
  }
}); 