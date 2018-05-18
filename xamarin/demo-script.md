# Xamarin - Demo Script

> This demo follows the Cognitive Services section, which (hopefully) ends in a demo of how to train a Custom Vision model to detect fruit.

1. Slides to talk about tools and services for mobile development.
    - Build native apps with Xamarin
    - Build, test, distribute, analyze with Visual Studio App Center
    - Connect your app to all the intelligent cloud services in Azure
1. Open Visual Studio (or VS for Mac) with the CoreML Custom Vision demo solution.
    - Point out:
      - Show model in folder [`Fruit.mlmodelc`](https://github.com/xamarin/ios-samples/tree/master/ios11/CoreMLAzureModel/CustomVision/Resources/Fruit.mlmodelc)
      - In [`ViewController`](https://github.com/xamarin/ios-samples/blob/master/ios11/CoreMLAzureModel/CustomVision/ViewController.cs):
          - Line 59: Load model
          - Line 83: Get the best observation and write it into the red bubble
1. Talk about how we can deploy the app to a device for local testing, or distribute it via App Center.
1. Open up app on phone and demo on real fruit.

## Prerequisites

- [Clone repo](https://github.com/xamarin/ios-samples) and open in VS or VS for Mac
- Ask Jim Bennett to invite you to the app on App Center
- Install app on an iOS device
- To project device (make sure you test this out!)
    - Use QuickTime player on Mac
    - Get a Lightning to HDMI cable
- Obtain real fruit (since this is before lunch, you can grab some lunch and demo on that :D

