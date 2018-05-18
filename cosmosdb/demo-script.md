# Cosmos DB

Slides should take ~5 minutes. Leaving ~10 minutes for demos.

## Demo 1 - MEAN app with MongoDB API + Cosmos DB portal walkthrough

### Prerequisites

- Create a new Web App and deploy this repo: https://github.com/anthonychu/node-todo
    - Windows App Service works fine. On Linux, choose Node.js 6.x. Hope it works.
    - Add an app setting named `MONGODB_URL` and leave it empty.
    - The app won't run because it's missing the MongoDB URL.
- Provision another Cosmos DB database account (can be any API, or it could be one you already have)

### Steps

1. Show how to provision a Cosmos DB account with MongoDB API.
1. While that's provisioning, go to the other Cosmos DB account and show folks some of the more interesting parts:
    - Data explorer
    - Geo replication and failover regions
    - Metrics
    - Default consistency
1. (optional) Show demo 3
1. Once the new Cosmos DB account is provisioned, go to the resources and get the MongoDB connection string. **Important** Go to the Quickstart blade and get the connection string from the Node.js tab!
1. Plug the connection string into the Node.js app's app settings.
1. Show the to-do app working.
1. (optional) show the new documents in Data explorer in portal.

## Demo 2 - Gremlin graph API

![](https://github.com/anthonychu/cosmosdb-gremlin-flights/raw/master/cosmosdb-flights.gif)

### Prerequisites

- Ask Anthony for access to the `cosmosdb-graph` resource group in his subscription

### Steps

1. Open the Cosmos DB graph account in the portal.
1. Go to Data explorer and run some queries (do not modify the data!)
    - `g.V().count()` - How many vertices
    - `g.V('LAX')` - Use airport code of the city you're in. Explain that vertices are airports with lat and lng, and edges are flights between airports.
    - `g.E().count()` - How many edges
    - `g.V('LAX').out()` - Airports reachable from current airport
1. Now go to https://cosmosdb-gremlin-flights.azurewebsites.net/ and ask audience where they want to go. Try a couple of combinations.

## Demo 3 - Data locality

This is an optional demo. I'm probably going to show this while we're waiting for the database to be created in Demo 1.

GIF: https://twitter.com/nthonyChu/status/905642832051953664

- Set up a Cosmos DB account with SQL API and 2 regions, 1 in the same region as the app and 1 on the other side of the world.
- Deploy this app: https://github.com/anthonychu/cosmosdb-latency (sorry, it's a bit low on instructions but I think you just need the 2 variables set in appsettings.json (`CosmosDB:Uri` and `CosmosDB:Key`).

### Steps

1. Open the app and explain that it is writing data to the region on the other side of the world. Point out locations and latency on graph.
1. Go into portal and open the database. Manually fail the location over to the same location as the app.
1. This takes 1-2 minutes but the graph should drop to under 10 ms. In the meantime, talk about manual and automatic failovers and how they work.
