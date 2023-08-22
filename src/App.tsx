import { registerRootComponent } from "expo";
import RootStack from "./navigation/RootStack";

export default function App() {
  return (
    <>
      <RootStack />
    </>
  );
}

registerRootComponent(App);
