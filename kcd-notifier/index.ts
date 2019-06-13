import {
    AzureFunction,
    Context,
    HttpRequest,
} from '@azure/functions';
import {
    sendErrorNotification,
    sendSuccessNotification,
} from './services/NotifyService';

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<void> => {
    const mode = req.body && req.body.mode;
    const activityTitle = req.body && req.body.activityTitle;
    const text = req.body && req.body.text;

    try {
        if (mode === 'error') {
            await sendErrorNotification(activityTitle, text);
        } else {
            await sendSuccessNotification(activityTitle, text);
        }

        context.res = {
            body: 'Team channels successfully notified!',
            status: 200,
        };
    } catch (error) {
        context.res = {
            body: 'Notifying teams channels failed! Provide mode, activityTitle and text of notification.',
            status: 400,
        };
    }
};

export default httpTrigger;
