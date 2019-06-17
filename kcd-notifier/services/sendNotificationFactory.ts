import {AxiosResponse} from 'axios';

interface IAxiosPost {
    post: (url: string, config: any) => Promise<AxiosResponse>,
}

export const sendNotificationFactory = (axios: IAxiosPost, notificationUrls: string[]) =>
    (themeColor: string, activityImageUrl: string) =>
        async (activityTitle: string, text: string): Promise<void> => {
            for (const url of notificationUrls) {
                const config = {
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
                };
                
                await axios.post(url, config);
            }
        };
