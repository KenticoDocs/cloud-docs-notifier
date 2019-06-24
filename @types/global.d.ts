interface IHttpResponse {
    readonly status: number;
    readonly body?: any;
    readonly [key: string]: any;
}

export interface IEventGridEvent {
    readonly id: string;
    readonly topic?: string;
    readonly subject: string;
    readonly data: any;
    readonly eventType: string;
    readonly eventTime: Date;
    readonly metadataVersion?: string;
    readonly dataVersion: string;
}
