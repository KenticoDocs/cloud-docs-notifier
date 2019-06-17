import { HttpRequest } from '@azure/functions';
import {isModeValid, isRequestValid} from './requestValidator';

describe('isRequestValid', () => {

    test('returns false when activityTitle is missing.', async () => {
        const request = {
            body: {
                mode: 'error',
                text: 'test',
            },
        };

        const result = await isRequestValid(request as HttpRequest);

        expect(result).toBeFalsy();
    });

    test('returns false when text is missing.', async () => {
        const request = {
            body: {
                activityTitle: 'activityTitle',
                mode: 'error',
            },
        };

        const result = await isRequestValid(request as HttpRequest);

        expect(result).toBeFalsy();
    });

    test('returns false when mode is missing.', async () => {
        const request = {
            body: {
                activityTitle: 'activityTitle',
                text: 'text',
            },
        };

        const result = await isRequestValid(request as HttpRequest);

        expect(result).toBeFalsy();
    });

    test('returns true for valid request.', async () => {
        const request = {
            body: {
                activityTitle: 'activityTitle',
                mode: 'error',
                text: 'text',
            },
        };

        const result = await isRequestValid(request as HttpRequest);

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
