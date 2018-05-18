# SQL Database (+ SQL Server)

## SQL DB

- Talk about SQL DB
- Show how to create one
- Go to azdevtour-insecure-app database (CDA Demo subscription) and look at features (do not alter settings as others might be using this too)
    - Look at pricing tiers and show scaling sliders
    - Show geo-replication
    - Dynamic data masking
    - Transparent data encryption
    - Performance recommendations
    - Query performance insights
    - Auto tuning
- Go to https://azdevtour-insecure-app.azurewebsites.net/
    - Try to log in - fail
    - Enter `' or 1=1 --` into email address... success!
    - Look at threat detection in portal to see a SQL injection attack alert
    
## SQL Server in a Linux container

- Run SQL as a Linux docker container:
    ```
    docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=somePassword123!' -p 1401:1433 --name sql1 -d microsoft/mssql-server-linux:2017-latest
    ```
- Open SQL Management Studio or SQL Operations Studio
    - Connect to localhost, port 1401 (or whatever you entered in the docker command)
    - Use `sa` as username, password from command
    - Browse around, point out that it says Linux is the OS
    
    
## Prerequisites

- Demo database and app should already be in Azure (under CDA Demos subscription)
- Install SQL Management Studio or SQL Operations Studio
- Install docker and pull `microsoft/mssql-server-linux:2017-latest` image
