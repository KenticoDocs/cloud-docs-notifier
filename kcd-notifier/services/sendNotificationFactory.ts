import {AxiosResponse} from 'axios';

interface IAxiosPost {
    post: (url: string, config: any) => Promise<AxiosResponse>,
}

export const sendNotificationFactory = (axios: IAxiosPost, notificationUrls: string[]) =>
    (themeColor: string, activityImageUrl: string) =>
        async (activityTitle: string, text: string): Promise<void> => {
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

            await notifyChannels(notificationUrls, config, axios);
        };

const notifyChannels = async (notificationUrls: string[], config: any, axios: IAxiosPost): Promise<void> => {
    for (const url of notificationUrls) {
        await axios.post(url, config);
    }
};
