# Container Instances

Container Instances allow simple & fast deployment of containers (both Windows & Linux) to Azure. You only pay for the seconds the container is running.

## Demo instructions

For this demo we will deploy the app we ran locally in the [../postgresql/README.md](Postgress Demo).
The Docker Container Image can be found on [https://hub.docker.com/r/berndverst/node-postgis-azure](Docker hub at berndverst/node-postgis-azure).

### Creating the Container Instance
```bash
DB_SERVER=devtour2018
DB_ADMIN_USER=bernd
DB_USER="$DB_ADMIN_USER@$DB_SERVER"
DB_PORT=5432
read -s DB_PASSWD

# If you haven't initialized the database, please do so via:
# --- This also showcases one time task execution ---
az container create --resource-group containergroupeast --name $DB_SERVER \
--image berndverst/node-postgis-azure --dns-name-label $DB_SERVER \
--restart-policy NEVER --environment-variables DBUSER=$DB_USER \
DBPASS=$DB_PASSWD DBPORT=$DB_PORT DBSERVER="$DB_SERVER.database.windows.net" PORT=80 \
--command-line "/entrypoint.sh initdb" -otable

az container create --resource-group containergroupeast --name $DB_SERVER \
--image berndverst/node-postgis-azure --dns-name-label $DB_SERVER \
--environment-variables DBUSER=$DB_USER DBPASS=$DB_PASSWD DBPORT=$DB_PORT \
DBSERVER="$DB_SERVER.database.windows.net" PORT=80 -otable
```

### Checking the creation status
```
az container show -n devtour2018 -g containergroupeast -otable

# or list all containers via:
#   az container list -otable
```

### Stream container logs (keep this terminal running)
```
az container logs -g containergroupeast -n devtour2018 --follow
```

### View the app in your browser
Depending on the DNS label you chose upon creation, you can now visit the app at
```
http://$DB_SERVER.eastus.azurecontainer.io
```
You will now see the search queries appearing in your terminal.

### Exec into the running container
```
az container exec -g containergroupeast -n devtour2018 --exec-command /bin/sh
```

### Shutting down the container
```
az container delete -g containergroupeast -n devtour2018 -otable
```

## Additional talking points

- You can persist application logs by mounting an Azure storage account as a folder in the container and writing to this directory.
- You can choose whether to restart containers automatically upon failure, or run containers only once (for one-off tasks for example).