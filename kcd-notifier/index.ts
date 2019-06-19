import {
    AzureFunction,
    Context,
    HttpRequest,
} from '@azure/functions';
import { INotification } from './models/INotification';
import {
    sendErrorNotification,
    sendSuccessNotification,
} from './services/NotifyService';
import {
    isModeValid,
    isRequestValid,
} from './utils/requestValidator';

const handleNotificationSending = async ({ activityTitle, text, mode }: INotification): Promise<IHttpResponse> => {
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

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<IHttpResponse> => {
    if (!isRequestValid(req)) {
        throw Error('Invalid request! Provide mode, activityTitle and text of notification in the request body.');
    }

    if (!isModeValid(req.body.mode)) {
       throw Error('Invalid request! Mode should be either error or success.');
    }

    return handleNotificationSending(req.body);
};

export default httpTrigger;
