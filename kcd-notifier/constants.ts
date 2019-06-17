require('dotenv').config();

const NotificationUrlsString = process.env['Teams.NotificationUrls'] || '';

export const NotificationUrls = NotificationUrlsString.split(';');

export const RedColor = 'C93636';
export const GreenColor = '36C936';

export const ErrorImageUrl = 'https://img.icons8.com/color/344/cancel.png';
export const SuccessImageUrl = 'https://img.icons8.com/color/344/ok.png';
