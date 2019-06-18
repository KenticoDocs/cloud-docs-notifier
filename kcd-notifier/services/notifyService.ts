import axios from 'axios';
import {
  ErrorImageUrl,
  GreenColor,
  NotificationUrls,
  RedColor,
  SuccessImageUrl,
} from '../constants';
import { sendNotificationFactory } from './sendNotificationFactory';

const sendNotification = sendNotificationFactory(axios, NotificationUrls);

export const sendErrorNotification = sendNotification(RedColor, ErrorImageUrl);
export const sendSuccessNotification = sendNotification(GreenColor, SuccessImageUrl);
