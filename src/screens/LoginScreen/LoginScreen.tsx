import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <View>
      <Image source={require("../../assets/images/login.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcom to CodeBox</Text>
        <Text style={styles.loginSignUpText}>Login/Signup</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Ionicons name="logo-google" size={24} color="white" />
          <Text style={styles.buttonText}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
