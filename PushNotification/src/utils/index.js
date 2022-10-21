import messaging from '@react-native-firebase/messaging';

// Request user accept to pop up a notification(on IOS)
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const NotificationServices = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      JSON.stringify(remoteMessage.notification),
    );
  });

  //foreground message handling
  messaging().onMessage(async remoteMessage => {
    console.log('Notification in foreground: ', JSON.stringify(remoteMessage));
  });

  //check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          JSON.stringify(remoteMessage.notification),
        );
      }
    });
};
