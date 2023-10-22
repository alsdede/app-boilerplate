import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import { ThemeProvider } from 'styled-components/native';

import Routes from '@/routes';
import { THEME } from '@/theme';
import { handleNotificationClick } from '@/utils/notifications';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize(Constants?.expoConfig?.extra?.oneSignalAppId);
OneSignal.Notifications.requestPermission(true);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    handleNotificationClick();
    return OneSignal.Notifications.clearAll();
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar backgroundColor='transparent' translucent />
      {fontsLoaded && <Routes />}
    </ThemeProvider>
  );
}
