import { OneSignal } from 'react-native-onesignal';

export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag('user_email', email);
}

export function tagUserInfo() {
  OneSignal.User.addTags({
    user_name: 'Andre',
    user_email: 'als.andresilveira@gmail.com',
  });
}
