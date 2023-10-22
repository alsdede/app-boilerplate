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

export function handleNotificationClick() {
  OneSignal.Notifications.addEventListener('click', (event) => {
    console.log('EVENT', event);
  });
}
export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag('user_email', email);
}

export function tagUserInfo() {
  OneSignal.User.addTags({
    user_name: 'Andre',
    user_email: 'als.andresilveira@gmail.com',
  });
}
