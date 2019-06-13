| [master](https://github.com/Kentico/kentico-cloud-docs-webhooks/tree/master) | [develop](https://github.com/Kentico/kentico-cloud-docs-webhooks/tree/develop) |
|:---:|:---:|
|[![Build Status](https://travis-ci.com/KenticoDocs/cloud-docs-notifier.svg?branch=master)](https://travis-ci.com/KenticoDocs/cloud-docs-notifier/branches) [![codebeat badge](https://codebeat.co/badges/dfc8dc4a-0723-4d7b-9775-9a7ddb5d4efe)](https://codebeat.co/projects/github-com-kenticodocs-cloud-docs-notifier-master) | [![Build Status](https://travis-ci.com/KenticoDocs/cloud-docs-notifier.svg?branch=develop)](https://travis-ci.com/KenticoDocs/cloud-docs-notifier/branches) [![codebeat badge](https://codebeat.co/badges/d6235490-5b23-4ddf-a1a7-94e1bcb5fe84)](https://codebeat.co/projects/github-com-kenticodocs-cloud-docs-notifier-develop) |


# Kentico Cloud Documentation - Notifier

Backend service for Kentico Cloud [documentation portal](https://docs.kenticocloud.com/).

Service is responsible for notifying defined Microsoft Teams channels.

## Overview
1. This project is a C# Azure Functions application.
2. It receives a HTTP request with body consisting of mode (one of error/success), activityTitle and text.
3. After receiving a request, the service push notification to the defined Microsoft Teams channels.

## Setup

### Prerequisites
1. Visual Studio 2017 with [Azure Functions and Web Jobs Tools](https://marketplace.visualstudio.com/items?itemName=VisualStudioWebandAzureTools.AzureFunctionsandWebJobsTools) installed
2. Subscriptions on MS Azure and GitHub

### Instructions
1. Clone the project repository and open it in Visual Studio.
2. Install all the necessary nugget packages.
3. Set the required keys.
4. Run the service locally in Visual Studio, or
5. Deploy the service to a new Azure Functions App instance in your Azure subscription.

#### Required Keys
* `Teams.NotificationUrls` - Urls of Microsoft Teams channels connected by semicolon.

## How To Contribute
Feel free to open a new issue where you describe your proposed changes, or even create a new pull request from your branch with proposed changes.

## Licence
All the source codes are published under MIT licence.