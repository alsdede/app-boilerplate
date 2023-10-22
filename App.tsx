import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LogLevel, OneSignal, OSNotification } from 'react-native-onesignal';
import Constants from 'expo-constants';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { tagUserInfo } from 'src/notifications/notificationsTag';
import { useEffect, useState } from 'react';
import Notification from './src/components/notification/notification';
import { handleForegroundNotification } from './src/utils/notifications';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize(Constants?.expoConfig?.extra?.oneSignalAppId);

// Also need enable notifications to complete OneSignal setup
OneSignal.Notifications.requestPermission(true);

export default function App() {
  const [notification, setNotification] = useState<OSNotification>();
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfo();

  // NOTIFICATION EFFECT
  useEffect(() => {
    const notification = handleForegroundNotification();

    setNotification(notification);

    return OneSignal.Notifications.clearAll();
  }, []);
  // NOTIFICATION EFFECT

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='transparent' translucent />

      <View>
        <Text>APP ABERTO</Text>
      </View>

      {notification?.title && (
        <Notification onClose={() => setNotification(undefined)} title={notification.title} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
