import { OneSignal } from 'react-native-onesignal';

export function handleForegroundNotification() {
  let response;
  OneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
    event.preventDefault();
    response = event.getNotification();

    // Use display() to display the notification after some async work
    event.getNotification().display();
  });
  return response;
}
