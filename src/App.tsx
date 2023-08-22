import { registerRootComponent } from "expo";
import { View } from "react-native";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

export default function App() {
  return (
    <View>
      <LoginScreen />
    </View>
  );
}

registerRootComponent(App);
