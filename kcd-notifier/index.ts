import {
    AzureFunction,
    Context,
    HttpRequest,
} from '@azure/functions';
import {
    sendErrorNotification,
    sendSuccessNotification,
} from './services/NotifyService';
import {
    isModeValid,
    isRequestValid,
} from './utils/requestValidator';

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<any> => {
    if (!isRequestValid(req)) {
        throw Error('Invalid request! Provide mode, activityTitle and text of notification in the request body.');
    }

    const {
        mode,
        activityTitle,
        text,
    } = req.body;

    if (!isModeValid(mode)) {
       throw Error('Invalid request! Mode should be either error or success.');
    }

    try {
        if (mode === 'error') {
            await sendErrorNotification(activityTitle, text);
        } else {
            await sendSuccessNotification(activityTitle, text);
        }

        return {
            body: 'Team channels successfully notified!',
            status: 200,
        };
    } catch (error) {
        return {
            body: 'Notifying teams channels failed!',
            status: 400,
        };
    }
};

export default httpTrigger;
