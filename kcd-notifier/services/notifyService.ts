import axios from 'axios';

require('dotenv').config();

const NotificationUrlsString = process.env['Teams.NotificationUrls'] || '';
const NotificationUrls = NotificationUrlsString.split(';');

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

export const sendErrorNotification = sendNotification('C93636', 'https://img.icons8.com/color/344/cancel.png');
export const sendSuccessNotification = sendNotification('36C936', 'https://img.icons8.com/color/344/ok.png');
