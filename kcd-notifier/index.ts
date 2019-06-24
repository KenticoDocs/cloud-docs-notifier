import {
    AzureFunction,
    Context,
} from '@azure/functions';
import { IEventGridEvent } from '../@types/global';
import { INotification } from './models/INotification';
import {
    sendErrorNotification,
    sendSuccessNotification,
} from './services/NotifyService';
import {
    isEventValid,
    isModeValid,
} from './utils/requestValidator';

const eventGridTrigger: AzureFunction = async (context: Context, eventGridEvent: IEventGridEvent): Promise<void> => {
    if (!isEventValid(eventGridEvent)) {
        throw 'Invalid request! Provide mode, activityTitle and text of notification in the request body';
    }

    if (!isModeValid(eventGridEvent.data.mode)) {
       throw 'Invalid request! Mode should be either error or success.';
    }

    return sendNotification(eventGridEvent.data);
};

const sendNotification = async ({ activityTitle, text, mode }: INotification): Promise<void> => {
    try {
        if (mode === 'error') {
            await sendErrorNotification(activityTitle, text);
        } else {
            await sendSuccessNotification(activityTitle, text);
        }

    } catch (error) {
        throw `Error: ${error.message} ${error.stack}`
    }
};

export default eventGridTrigger;
