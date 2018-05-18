# Application Insights

## Demo Script

- Show an ASP.NET Core app in Azure Web Apps without App Insights, a purple bar will appear after ~10 seconds. Talk about how adding Application Insights to an application is as simple as clicking the banner.
- Open up notbacon App Insights, point out features
    - Live stream
        - Open the live stream and talk about what it is.
        - In another tab, open https://notbacon.azurewebsites.net, and try it with a couple of images.
        - Switch back to live stream to see traffic appearing immediately.
        - In notbacon app, make sure the box is blank or contains an invalid image URL. Click submit. There should be an error.
        - Show in live stream the error, click on the error to get stack trace
    - App Map
        - Show app map, there should be an error in one of the Cognitive Services calls. Click it and drill into a stack trace (you'll need to click around to figure out how to get there)
    - Smart Detection
        - All telemetry is fed into machine learning to detect anomalies. There should be at least one detected error (abnormal rise in failed requests).
        - Click it and view errors. Again, drill in if the audience still seems interested.
        - Talk about how without this feature, these errors would be left undetected (it also sends an email when detected, and can configure a webhook)
    - (optional) Web Test
        - You can configure one ping test for free to check availability
- Application Insights is free for 1GB of telemetry per month

## Setup

- Deploy a simple ASP.NET Core app to a Web App without enabling Application Insights
- Ask Anthony for access to the notbacon-official resource group in his subscription
- Ensure there's are some smart detection alerts. If there are none, go to the notbacon app and submit ~50 bad URLs
