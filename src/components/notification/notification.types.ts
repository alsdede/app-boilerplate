import { OSNotification } from 'react-native-onesignal';

export type NotificationProps = {
  data: OSNotification;
  onClose: () => void;
};

export type AdditionalDataProps = {
  route?: 'details';
  game_id?: string;
};
