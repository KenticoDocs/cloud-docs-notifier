import { HttpRequest } from '@azure/functions';

export const isRequestValid = (request: HttpRequest): boolean =>
    request.body &&
    request.body.activityTitle &&
    request.body.mode &&
    request.body.text;

export const isModeValid = (mode: string): boolean =>
    mode === 'error' || mode === 'success';
