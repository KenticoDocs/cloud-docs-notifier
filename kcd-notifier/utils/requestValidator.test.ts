import { IEventGridEvent } from '../../@types/global';
import {
    isEventValid,
    isModeValid,
} from './requestValidator';

describe('isEventValid', () => {

    test('returns false when activityTitle is missing.', async () => {
        const event: IEventGridEvent = {
            data: {
                mode: 'error',
                text: 'test',
            },
            dataVersion: '1',
            eventTime: new Date(),
            eventType: 'type',
            id: '123',
            subject: 'request',
        };

        const result = await isEventValid(event);

        expect(result).toBeFalsy();
    });

    test('returns false when text is missing.', async () => {
        const event: IEventGridEvent = {
            data: {
                activityTitle: 'activityTitle',
                mode: 'error',
            },
            dataVersion: '1',
            eventTime: new Date(),
            eventType: 'type',
            id: '123',
            subject: 'request',
        };

        const result = await isEventValid(event);

        expect(result).toBeFalsy();
    });

    test('returns false when mode is missing.', async () => {
        const event: IEventGridEvent = {
            data: {
                activityTitle: 'activityTitle',
                text: 'text',
            },
            dataVersion: '1',
            eventTime: new Date(),
            eventType: 'type',
            id: '123',
            subject: 'request',
        };

        const result = await isEventValid(event);

        expect(result).toBeFalsy();
    });

    test('returns true for valid request.', async () => {
        const event: IEventGridEvent = {
            data: {
                activityTitle: 'activityTitle',
                mode: 'error',
                text: 'text',
            },
            dataVersion: '1',
            eventTime: new Date(),
            eventType: 'type',
            id: '123',
            subject: 'request',
        };

        const result = await isEventValid(event);

        expect(result).toBeTruthy();
    });
});

describe('isModeValid', () => {

    test('returns true when mode is error.', async () => {

        const result = await isModeValid('error');

        expect(result).toBeTruthy();
    });

    test('returns true when mode is success.', async () => {

        const result = await isModeValid('success');

        expect(result).toBeTruthy();
    });

    test('returns false for unknown mode.', async () => {

        const result = await isModeValid('unknown');

        expect(result).toBeFalsy();
    });
});
