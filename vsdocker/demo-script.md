# Visual Studio and .NET with Docker

## Demo Script

1. File / new project / ASP.NET Core 2 / Web app
1. (optional) Change the `Message` in `About.cshtml` to `System.Net.Dns.GetHostName()` so that it prints the container name in each environment.
1. Right-click on project and add Docker support.
1. F5 to run project, put a breakpoint somewhere and show debugging working.
1. Stop debugging.
1. Right-click and deploy to Linux App Service.
    - If first time deploying, choose new resource group, hosting plan, registry.
    - **If you have deployed before**, choose the previous hosting plan and registry, deployment will be faster. (and if you deploy the same image to AKS later, you already have the registry secrets in AKS)
1. When deployment completes, click on the link in the publish window to open the site.
1. (optional) Open command prompt and show the new image being created (this only gets created when deploying in release mode)
1. (optional) Make a change and publish again.

## Prerequisites

- Windows
- Docker for Windows installed and started (on my VM I have to run everything as admin: Docker, VS, Command Prompt) 
