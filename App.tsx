import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import Constants from 'expo-constants';
import { tagUserInfo } from 'src/notifications/notificationsTag';
import { useEffect } from 'react';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize(Constants?.expoConfig?.extra?.oneSignalAppId);

// Also need enable notifications to complete OneSignal setup
OneSignal.Notifications.requestPermission(true);

export default function App() {
  tagUserInfo();

  useEffect(() => {
    const unsubscribe = OneSignal.Notifications.addEventListener(
      'foregroundWillDisplay',
      (event) => {
        event.preventDefault();
        // some async work
        console.log('NOTIFICATION', event?.notification);
        // Use display() to display the notification after some async work
        event.getNotification().display();
      },
    );
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <Text>PUSH TEST</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
