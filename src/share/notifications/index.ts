import notifee, { Notification } from '@notifee/react-native';

export async function displayNotifications({
  title = 'Notification',
  body = 'Welcome',
}: Notification): Promise<string> {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Display a notification
  return await notifee.displayNotification({
    title: title,
    body: body,
  });
}

export async function cancel(notificationId: string) {
  await notifee.cancelNotification(notificationId);
}
