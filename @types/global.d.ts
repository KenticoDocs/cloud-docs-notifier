interface IHttpResponse {
    readonly status: number;
    readonly body?: any;
    readonly [key: string]: any;
}
