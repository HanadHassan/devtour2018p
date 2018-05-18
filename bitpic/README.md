# BitPic

## Up and Running

1. Install Node (developed using v10, you should be good with any LTS)
1. Install Cosmos emulator or MongoDB for local dev
1. Add the following to config.json or pass in via env variables
  1. Start Mongo/Cosmos, put the url (with login if you're using it) in dbUrl
  1. Put a different db's URL for the sessionUrl, where all your sessions will be stored in Mongo
  1. Sign up for a Twitter account and get the key and secret, twitterSecret and twitterKey
  1. Sign up a Azure Blob Storage account and get the url, blobUrl
  1. Fill in the blobImagePrefix based on where your Azure Blob Storage is putting the images
  1. Make up a sessionSecret (used to encrypt sessions)
  1. Add the Twitter handles of admins you want to be able to ban people
1. `npm install`
1. `npm run populateMongo`
1. `npm run dev`

## Usage

### Can be called logged out

- `/api/feed` - Get the general feed from everyone
- `/api/feed/<username>` - Get a user's feed
- `/auth/twitter` - Go through Twitter auth flow

### Must be logged in

-`/api/member/pic` - Post picture, requires image sent as `pic`, can also send `caption`
- `/api/member/comment` - Lets you comment on an image. Requires the `url` of the image to be sent as well as the `comment`.

### Must be admin

- `/api/admin/ban` - Removes all posts and comments from person, bans them from making further comment or posts permanently
