import { Request, Response } from "express";
import { Db, MongoClient } from "mongodb";
import { dbCollection, dbName, dbUrl } from "../../utils/config";
import logger from "../../utils/logger";

export default function postCommentApi(req: Request, res: Response): void {
  console.log(req.body);
  if (!req.user || !req.user.username) {
    res
      .status(401)
      .json({ status: "error", message: "you must authenticate first" });
    return;
  }
  if (!req.body.comment || !req.body.url) {
    res
      .status(400)
      .json({ status: "error", message: "you need both a comment and a url" });
    return;
  }
  const displayName = req.user.username;
  const { comment, url } = req.body;
  let client: MongoClient;
  let db: Db;
  let newPost;

  MongoClient.connect(dbUrl)
    .then(resClient => {
      client = resClient;

      db = client.db(dbName);
      logger.info(`${displayName} commented "${comment}" on ${url}"`);

      return db.collection(dbCollection).findOne({ url });
    })
    .then(pic => {
      newPost = {
        ...pic,
        comments: pic.comments.concat({
          displayName,
          comment,
          time: new Date().toISOString()
        })
      };
      console.log(newPost);
      return db.collection(dbCollection).replaceOne({ url }, newPost);
    })
    .then(() => {
      client.close();
      res.json(newPost).end();
    })
    .catch(err => {
      res
        .status(500)
        .json({ status: "error", message: "uh, something went wrong" })
        .end();
      logger.error(err);
      client.close();
    });
}
