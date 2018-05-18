# Azure + Xamarin = 🚀

Let's build Photo Tour as a mobile app! We'll harness the power of Azure and the native device capabilities of both iOS and Android all from a single code base built with Xamarin.

## Azure Offerings Demoed

* Azure AD B2C
* Azure BLOB Storage
* Azure Cosmos DB with MongoDB API

## Talk Outline

There's not a ton of time, and most of the time is going to be spent in the demo, so there's going to be few slides.

### Main Talking Points

* Xamarin lets you create native mobile apps that access unique features of each operating system and device.
* ... and because it's written w/ .NET you can create a reusable layer that takes advantage of NuGet & .NET-iness even though you're targeting non-Microsoft OS's.
* Integration with Azure w/ those NuGets is straight-forward and lets you create a serious, full-featured, cloud enabled app in 30 minutes. (At least in demo-world).

### Flow

* Slides (These are based on what's currently in Prashant's deck)
  * Slide 1 - (Mobile): 
    * This will be quick - mention that you're going to talk about mobile and building up a cloud enabled app with Xamarin.
  * Slide 2 - (Native, Distribute, Intelligent):
    * I want to take a second to talk about apps ... in particular native apps. Native means an app has 100% access to the operating system, and it has 100% access to each device's unique capabilites. Traditionally one would build a native app by using XCode and Swift for iOS and Android Studio & Java for Android. That's double the work with double the people with double the code. I'm going to use Xamarin today - which lets you build 100% native apps using .NET - with a reusable code base.
    * And as you've seen so far today - Azure is a powerful solution - and we can definitely put that power into a mobile app as well. But even better - because we're using .NET to write the mobile apps - we can write an application logic layer once - that's used across operating systems - and stand on the shoulders of giants ... otherwise known as NuGet ... to make our work so much easier.
  * Slide 3 - (Customers): Can we cut this one?
  * Slide 4 - Demo - let's do this!
* Demo
* Take a bow

## Demonstration

You're going to be showing 3 Azure services - Azure AD B2C to log in, Azure BLOB Storage, Azure Cosmos DB w/ MongoDB API. Also you'll be calling out Xamarin.Forms and how you're creating a native iOS and Android app from a single codebase - all the while accessing the native capabilites of the device. It's .NET everywhere - iOS, Android, to the cloud!

### Prime The Pump

Run through these right before you go on stage:

* If running on the iOS simulator, make sure you have appropriate photos to upload in the photo library
* If running on your device (iOS or Android)
  * Turn off all notifications
  * Connect to conference wifi
  * Have appropriate photos in photo library **Make sure any embarrasing ones are gone - this will be on screen!**
* Run through the app again (making sure to log in)

**MAKE SURE TO LOG OUT OF THE APP!**

### Solution Setup

* All the code that will be demoed is located in the `PhotoTour.Core` project.
* Everything that communicates with Azure is located in the `Services` folder.
  * `IdentityService` => Azure AD B2C
  * `MongoDataService` => Azure Cosmos DB w/ MongoDB API
  * `StorageService` => Azure BLOB Storage
* Code that accesses the camera is located in the `ViewModels` folder `PhotoListViewModel`
* New Xamarin.Forms 3.0 code announced at Build is located in `Pages` folder `PhotoListPage.xaml` and `PhotoListPage.xaml.cs`
* Data binding code is located in `Pages`, `PhotoViewPage.xaml`

> ASK MATT SOUCOUP WHERE THE VALUES FOR `APIKeys.cs` ARE!

### The Demonstration Part 1: Azure AD B2C

Today we're going to build a mobile app that's cloud enabled with as little code as possible using Xamarin and the power of .NET Standard that, which if libraries adhere to, will allow them to run across different operating systems.

* **Start the app.**
* Mention that other than boilerplate startup code, everything is written in a single codebase.
* This means that what you're seeing is a 100% native iOS (or Android) app. Not something that's running in a web view, or is painted on the screen by a special graphics framework. It's native, which means it can access the device's native hardware and make use of specific features of each operating system.
* And because this is written in Xamarin with .NET - we can reuse our application logic across platforms - reducing the amount of application logic we write as well.

* **Hit the login button - let the page appear**
* For example - identity is something that's notriously hard to accomplish. There is OAuth flows, OpenID Connect, managing tokens, caching of tokens, and so on. Not to mention logging in with Twitter.
  * But the Azure AD B2C team has created a library to do all of that for us and it's available via NuGet. It's called the Microsoft.Identity.Client.

**Complete the Twitter login**
* I just logged in with Twitter and the returned token was all cached for me. And the code to do that is pretty straight forward.
* Show the code in `IdentityService`
  * Line 57 shows how the login is done
  * Line 95 shows how cached credentials are retreived
* Azure AD B2C hides the details of communicating to Twitter (and handles other ID providers like facebook, Github, etc). It puts users in an Active Directory. Issues tokens.
* The Microsoft.Identity.Client handles the difficult work of communicating to AD B2C & caching.
* .NET Standard do the rest making login cross platform w/ code sharing from a single spot.

### The Demonstration Part 2: Azure Cosmos DB + MongoDB API (plus Xamarin.Forms 3.0)

When you think of .NET developers - what database do you think of? What about Cloud databases? SQL Server probably. A mantra of Microsoft is "Any Developer, Any App, Any Platform". And that's certainly true when it comes to MongoDB and .NET.

MongoDB is a document database - not relational. It's open source. And it's usually associated with node and web apps. But we can just as easily use it within a Xamarin app - and thus iOS and Android - through Azure Cosmos DB and some great NuGet packages.

**Show the photo list**
The information for these photos are stored in an Azure Cosmos DB with MongoDB. And using the MongoDB NuGet package - accessing MongoDB can be done in only a couple lines of code.

* Open `MongoDataService.GetAllPhotos`.
  * This is the function that is returning all of the photos from the MongoDB instance. Notice that the library even provides asynchronous operations - which is very important in mobile development so we don't block the UI!
* Show `MongoDataService.FindPhotoByUrl`
  * But because this is .NET, we've become acustomed to great features like LINQ - and we can do that with the Mongo library too!
* Open `Comment`
  * The model class that contains all of this information is just a CLR object decorated with some Mongo attributes telling it these are Mongo properties.
  * It also implements the `INotifyPropertyChanged` which is used for Xamarin.Forms data binding.

**Show a photo detail and start to add a new comment**

* Data binding is Xamarin.Forms method of handling property changes between the UI and model properties without writing any code. And it's a part of the MVVM architecture pattern.
  * I always then ask who has heard of MVVM. Then ask who has heard of MVC. Then say MVVM is pretty much MVC just with more V's and more M's. Super funny stuff! 🤣
* You can enter text in this field and it's automatically propagated from the field to the model without anything other than an initial definition.
* Open `PhotoViewPage.xaml` show line 69 the `Text` property.
* That's all one needs to keep the 2 in-sync. That way when I hit save, I don't have to worry about handling any text changed properties.

**Show the photo list again**
And I know what you're saying - that's cool - but {presenter name} that photo list sure looked hot ... how did you do that?

* A new feature in Xamarin.Forms 3.0 just announced at Build is called `FlexLayout`.
* Open `PhotoListPage.xaml`
* `FlexLayout` takes any child controls and automatically arranges them on-screen into a great looking UI. Previously doing a grid layout like that photo list was code consuming and time consuming. Now it's just this:
  * Show lines 15 - 17.
* Create a `FlexLayout` and then add controls to it.
  * Open `PhotoListPage.xaml.cs`
  * Show lines 60 - 68

### The Demonstration Part 3: Azure Storage + Xamarin Device Functionality

The last thing I want to show is how to access the unique features of each device from the shared code. And that's getting at the camera.

**Show the photo list, open the camera, take a photo of the audience**

* Here's what all happened - open `PhotoListViewModel` and go to line 166.
  * Using a Media plugin - I was able to get at the devices camera capability through an abstraction.
  * The Media plugin handled all the dirty work for me. All I needed to do was:
    * `IsTakePhotoSupported` and `IsCameraAvailable` to see if my device is currently able to snap a photo.
    * Then further down the line, `TakePhotoAsync` - that's all there is to snap a photo.

* Uploading to BLOB storage is wrapped in another great NuGet package that runs on multiple operating systems!
* Show `StorageService`
* Line 24 does the upload
  * After getting a reference to the storage account and the container in which the BLOB resides, the only line of code that matters is `UploadFromStreamAsync`.

### That's It - Fully Native iOS and Android App With Full Azure Functionality In A Single Code Base!

## Demo Machine Setup

> Use a Mac.
>
> \-Matt Soucoup ... just now

In order compile anything for iOS, you need a Mac, that's the way it is. While Xamarin offers a solution to build iOS on Windows, it still flow through a Mac. That means 2 machines on stage, which is probably overkill for the 30 minutes alloted. So use a Mac. 😁

The first 3 steps listed are only for a machine that does not have the Xamarin workload and iOS certificates already installed. If your machine already does and you can successfully debug on device, feel free to skip to step number 4.

### 1. Installing Xamarin

All the demos are designed to be shown with Visual Studio. 

_You only need to do this step once, ideally way, way, way before the show date._

* Install XCode from the Apple **Mac** App Store.
* These are the [best instructions](https://docs.microsoft.com/en-us/visualstudio/mac/installation?WT.id=azuredevtour-github-masoucou), hands down, on installing Visual Studio for Mac. The instructions also address the Xamarin workload.
  * __Note:__ All further 3rd party dependencies dependencies, including the Android SDKs will be installed.
* Once everything is installed, launch Visual Studio and sign-in with your Microsoft credentials. _This is not necessary to run the demos, but cleans up the overall look._

Next step is to get the iOS provisioning setup.

### 2. iOS Setup

**If you are only demoing on the simulator (not a real device) you do not need to do this step.**

Now we need to tell Visual Studio for Mac (and XCode under the covers) what our Apple Developer account is, so it can go through the process of creating certificates and associating your device ID with that certificate into what's known as a provisioning profile, download it, so you can successfully debug/demo on device. Yeah seriously, there's a ton of steps for iOS development.

**The One Time Only Steps Per Machine:**

* Install the *fastlane* toolset. The [documentation](https://docs.microsoft.com/en-us/xamarin/ios/deploy-test/provisioning/fastlane/index?WT.id=azuredevtour-github-masoucou#installation) is here and it's great.
  * You only need to follow the steps in the _Install_ section.
* Add the CDA Apple Developer Account to Visual Studio Mac. [Docs are here](https://docs.microsoft.com/en-us/xamarin/cross-platform/macios/apple-account-management?WT.id=azuredevtour-github-masoucou&context=xamarin%2Fios&tabs=vsmac).
  * You should only need to follow the _Adding an Apple developer account_ section.
* Open the solution `devtour2018\xamarin\PhotoTour.sln` in Visual Studio Mac.
* Finally, enable automatic provisioning. [Docs are here](https://docs.microsoft.com/en-us/xamarin/ios/get-started/installation/device-provisioning/automatic-provisioning?tabs=vsmac).

**Setup Every Time a New Device Is Plugged In:**

* Plug your device into the Mac via USB. (Yay - that's it!)

### 3. What About Android?

Assuming all went well with step #1, you shouldn't have to do anything further to get Android to work.

### 4. Day-Of Prep

The big day is finally here! There are 2 different ways you can demo the app.

* With a simulator / emulator.
* On device.

The simulator (iOS) or emulator (Android) route is easier to do, as it involve less moving parts. However, the demo is more compelling with a real device, as it allows you to snap photos in real time and upload them to Azure. Your choice.

If you run on the simulator, make sure you have some interesting photos loaded into the photo library. (Browse the web and save them.)

* Either way you go, make sure the solution is open in Visual Studio Mac: `\devtour2018\xamarin\PhotoTour.sln`

#### iOS Simulator

* From the dropdowns across the top toolbar (right next to the play button, they don't look like dropdowns at first glance), select the following:
  * Reviewer.iOS
  * Debug | iPhoneSimulator
  * iPhone X 11.3 _(note the 11.3 may be different by the time you read this depending on Apple's SDK upgrade cycle.)_
* Hit the play button. The app should start within an iPhone X simulator.

#### Android Emulator

* I do not recommend this app be run in the emulator. This is because it requires a certain version of Android which may or may not get installed by default, and it's not worth going through the Android SDK to get everything working when the iOS simulator will get the point across.

#### iOS Device

_Prerequisite: Reflector app for Mac._

* Make sure your device is on the conference wifi
* From the dropdowns across the top toolbar (right next to the play button, they on't look like dropdowns at first glance), select the following:
  * Reviewer.iOS
  * Debug | iPhone
  * **The name of your device** _(it will be the same name that you gave it when you set it up after you purchased it)._
* Make sure your device is unlocked.
* Hit the play button. The app should start on your device.
* Start Reflector on the Mac.
* Mirror your device using AirPlay.
* Demo using your device as the main input, but viewing on-screen with Reflector.

#### Android Device

_Prerequisite: Vysor app for Mac._

* Make sure your device is on conference wifi
* From the dropdowns across the top toolbar (right next to the play button, they on't look like dropdowns at first glance), select the following:
  * Reviewer.Droid
  * Debug
  * **The name of your device** _(it will be the name of the manufacturer and model)._
* Start Vysor on Mac.
* Choose your device from the Vysor menu.
* **You will be able to interact with your device through Vysor.** The entire demo can be done with Vysor on screen and you interacting with Vysor on screen.

> Run through the app! Log in, upload a photo, up vote & down vote.