interface ISection {
    readonly activityImage: string;
    readonly activityTitle: string;
    readonly text: string;
}

export interface ITeamsNotificationConfig {
    readonly '@@context': string;
    readonly '@@type': string;
    readonly 'sections': ISection[];
    readonly 'summary': string;
    readonly 'themeColor': string;
}
