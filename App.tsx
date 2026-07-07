import React, { useEffect } from 'react'
import Routes from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ImmersiveMode from "react-native-immersive-mode";

const App = () => {

  useEffect(() => {
    ImmersiveMode.setBarMode("FullSticky");
    ImmersiveMode.setBarTranslucent(true);
  }, []);



  return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <Routes />
          </SafeAreaProvider>
        </GestureHandlerRootView>
  )
}

export default App;