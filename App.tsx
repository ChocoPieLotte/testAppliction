import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";

import { fonts } from "./src/theme/fonts";
import Navigation from "./src/navigation";
import { store } from "./src/store";

export default function App() {
    const [fontsLoaded] = useFonts({
      [fonts.regular]: "https://fonts.cdnfonts.com/s/15011/CircularStd-Medium.woff",
      [fonts.bold]: "https://fonts.cdnfonts.com/s/15011/CircularStd-Bold.woff",
    });
    if(!fontsLoaded) return <ActivityIndicator size="large" style={{justifyContent: 'center', flex: 1}} />
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
}
