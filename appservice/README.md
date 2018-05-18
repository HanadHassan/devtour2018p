# App Service 

## Prerequisite

* Create a Standard Pricing Azure App Service Plan
* Create a .NET MVC app to be opened in Visual Studio only (file new project)
* [Set your Azure Deployment Credentials](https://docs.microsoft.com/azure/app-service/app-service-deployment-credentials?azdevtour-github-marouill)

## Slides
Azure, lots of infra capability (IaaS)
then lots of Platform services. More interesting for developers.
Going through lots of them today. Awesome to build great apps.

(read slide)
    Auto-patched
    Auto-scaled
    Built-in support for CI/CD
    Use whatever programming language
    Now supports both language

## App Service Demo

* Ask people to pick a name.
* Create a new `node` app that is `server.js` with hello world

```javascript
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h1>Hello World!</h1>");

});

var port = process.env.PORT || 5000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
```

* Run it from the command line. Open up locally in browser.

### Let's introduce Azure

* Portal > New Resource > App Service
* Explain the process what it's doing (creating resource based on template, provisioning resources, adding load balancer)
* Go to App URL.

### Deploy to Azure

> What can be done, FTP, Git, etc...

* Portal > App Service > Deployment options (talk about the options)
* Select Local Git Repository
* Back to overview, pick the git clone URL
* Back to console, let's init git
    * `git init`
    * `git add .`
    * `git commit -m "first commit"`
    * `git remote add azure <URL>`
    * `git push azure master` (type in password)
* Go to App URL
* Modify app. git add, commit, push azure master
* Refresh app

### Viewing deployments

* Go to deployment options
* Go to Overview and talk about live telemetry

### Let's scale it

* Click on Scale out

This will allow me to scale out to multiple VM/resources
 
* Mention that you can manually scale up to X instances
* Create a rule to scale based on metric
    * 1 and 10 VM
    * CPU > 70%
    * Explain how they add/remove one VM at a time

## Show experience with .NET and Visual Studio

* Show the Right-Click Publish Experience from an app already created
* Show the incremental change too.

## Deployment Slots

Allows you to create a secret URL for your slot

* Create a deployment slot for our application that was deployed in Visual Studio
* Publish our application to staging (v2)
* Have the audience see the url difference
* Demo the "Swap" from the overview page. Compare the urls again.