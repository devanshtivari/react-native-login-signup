import React from "react";
import { View,Text,Button,TouchableOpacity,Dimensions,StyleSheet } from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { Platform } from "react-native";

export default function App(){
  return(
    <View>
      <Text>Sign In Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header:{
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#c6d2e9",
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#4046af",
    fontWeight: "bold",
    fontSize: 30
  },
  text_footer: {
    color: "#4046af",
    fontSize: 18
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 0 : -12,
    padddingLeft: 10,
    color: "#05375a"
  },
  button: {
    alignItems: "center",
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})