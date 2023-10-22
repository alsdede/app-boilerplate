import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { OSNotification, OneSignal } from 'react-native-onesignal';

import Notification from '@/components/notification/notification';
import { handleForegroundNotification } from '@/utils/notifications';

import AppRoutes from './app.routes';

const Routes = () => {
  const [notification, setNotification] = useState<OSNotification>();
  // NOTIFICATION EFFECT
  useEffect(() => {
    const notification = handleForegroundNotification();

    setNotification(notification);

    return OneSignal.Notifications.clearAll();
  }, []);
  // NOTIFICATION EFFECT

  return (
    <NavigationContainer>
      <AppRoutes />
      {notification?.title && (
        <Notification onClose={() => setNotification(undefined)} data={notification} />
      )}
    </NavigationContainer>
  );
};

export default Routes;
