import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -20,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginSignUpText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 80,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    marginLeft: 10,
  },
});
