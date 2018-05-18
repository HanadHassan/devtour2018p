echo "We will now prompt you for your Postgres database connection info."
echo "This will be used to create a Kubernetes secrets file, secrets.env."

echo "Enter Server Name (not FQDN):"
read DB_SERVER

echo "Enter Admin Username:"
read DB_ADMIN_USER

DB_USER="$DB_ADMIN_USER@$DB_SERVER"
DB_PORT=5432

echo "Enter Password:"
read -s DB_PASSWD

echo "DBUSER=$DB_USER" > secrets.env
echo "DBPASS=$DB_PASSWD" >> secrets.env
echo "DBPORT=$DB_PORT" >> secrets.env
echo "DBSERVER=$DB_SERVER.database.windows.net" >> secrets.env
echo "PORT=80" >> secrets.env
