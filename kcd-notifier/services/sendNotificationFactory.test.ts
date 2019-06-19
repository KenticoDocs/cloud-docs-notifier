import { sendNotificationFactory } from './sendNotificationFactory';

describe('sendNotificationFactory', () => {
    const text = 'text';
    const activityTitle = 'activityTitle';

    test('send correct HTTP POST request.', async () => {
        const post = jest.fn();
        const axios = {
            post,
        };
        const url = ['test/url'];

        const sendNotification = sendNotificationFactory(axios, url);

        await sendNotification('red', 'image/url')(activityTitle, text);

        expect(post.mock.calls[0][0]).toEqual(url[0]);
        expect(post.mock.calls[0][1].sections[0].text).toEqual(text);
        expect(post.mock.calls[0][1].sections[0].activityTitle).toEqual(activityTitle);
    });

    test('send requests to all specified channels.', async () => {
        const post = jest.fn();
        const axios = {
            post,
        };
        const url = ['test/url', 'test/url/second'];

        const sendNotification = sendNotificationFactory(axios, url);

        await sendNotification('red', 'image/url')(activityTitle, text);

        expect(post.mock.calls[0][0]).toEqual(url[0]);
        expect(post.mock.calls[0][1].sections[0].text).toEqual(text);
        expect(post.mock.calls[0][1].sections[0].activityTitle).toEqual(activityTitle);

        expect(post.mock.calls[1][0]).toEqual(url[1]);
        expect(post.mock.calls[1][1].sections[0].text).toEqual(text);
        expect(post.mock.calls[1][1].sections[0].activityTitle).toEqual(activityTitle);
    });
});
