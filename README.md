![master](https://github.com/KenticoDocs/kontent-docs-notifier/actions/workflows/master_kcd-notifier-service-live-master.yml/badge.svg)
![develop](https://github.com/KenticoDocs/kontent-docs-notifier/actions/workflows/develop_kcd-notifier-service-live-dev.yml/badge.svg)

# Kentico Kontent Documentation - Notifier

Backend service for Kentico Kontent [documentation portal](https://docs.kontent.ai/).

Service is responsible for notifying defined Microsoft Teams channels.

## Overview

1. This project is a TypeScript Azure Functions application.
2. It receives an HTTP request with body consisting of mode (one of error/success), activityTitle and text.
3. After receiving a request, the service pushes notification to the defined Microsoft Teams channels.

## Setup

### Prerequisites

1. Node (+yarn) installed
2. Visual Studio Code installed
3. Subscriptions on MS Azure and Kentico Kontent

### Instructions

1. Open Visual Studio Code and install the prerequisites according to the [following steps](https://code.visualstudio.com/tutorials/functions-extension/getting-started).
2. Log in to Azure using the Azure Functions extension tab.
3. Clone the project repository and open it in Visual Studio Code.
4. Run `yarn install` in the terminal.
5. Set the required keys.
6. Deploy to Azure using Azure Functions extension tab, or run locally by pressing `Ctrl + F5` in Visual Studio Code.

#### Required Keys

* `Teams.NotificationUrls` - Urls of Microsoft Teams channels connected by semicolon.

## Testing

* Run `yarn run test` in the terminal.

## How To Contribute

Feel free to open a new issue where you describe your proposed changes, or even create a new pull request from your branch with proposed changes.

## Licence

All the source codes are published under MIT licence.
