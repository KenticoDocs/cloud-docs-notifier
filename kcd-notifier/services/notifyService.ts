import axios from 'axios';
import {
  ErrorImageUrl,
  GreenColor,
  NotificationUrls,
  RedColor,
  SuccessImageUrl,
} from '../constants';

const sendNotification = (themeColor: string, activityImageUrl: string) =>
  async (activityTitle: string, text: string): Promise<void> => {
    for (const url of NotificationUrls) {
      await axios.post(url, {
        '@@context': 'https://schema.org/extensions',
        '@@type': 'MessageCard',
        'sections': [
          {
            activityImage: activityImageUrl,
            activityTitle,
            text,
          },
        ],
        'summary': 'One Help Portal - notification',
        'themeColor': themeColor,
      });
    }
  };

export const sendErrorNotification = sendNotification(RedColor, ErrorImageUrl);
export const sendSuccessNotification = sendNotification(GreenColor, SuccessImageUrl);
