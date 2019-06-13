import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<void> => {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));

    if (name) {
        context.res = {
            body: 'Hello ' + (req.query.name || req.body.name),
            // status: 200, /* Defaults to 200 */
        };
    } else {
        context.res = {
            body: 'Please pass a name on the query string or in the request body',
            status: 400,
        };
    }
};

export default httpTrigger;
