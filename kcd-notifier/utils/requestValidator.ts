import { IEventGridEvent } from '../../@types/global';

export const isEventValid = (event: IEventGridEvent): boolean =>
    event.data &&
    event.data.activityTitle &&
    event.data.mode &&
    event.data.text;

export const isModeValid = (mode: string): boolean =>
    mode === 'error' || mode === 'success';
