// tslint:disable-next-line:no-var-requires
const appInsights = require("applicationinsights");
// tslint:disable-next-line:no-var-requires
require("dotenv").config();
import bodyParser from "body-parser";
import mongoStoreFn from "connect-mongo";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import session from "express-session";
import morgan from "morgan";
import passport from "passport";
import api from "./api";
import auth from "./auth";
import {
  appInsightsIntrumentationKey,
  dbPass,
  dbUrl,
  dbUser,
  port,
  sessionSecret
} from "./utils/config";
import logger from "./utils/logger";

appInsights.setup(appInsightsIntrumentationKey);
appInsights.start();

const app = express();

const MongoStore = mongoStoreFn(session);

app.use(cors());

app.use("/", express.static(`${__dirname}/../../dist`));

app.use(
  session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      url: dbUrl,
      mongoOptions: {
        auth: { user: dbUser, password: dbPass }
      }
    })
  })
);
app.use(
  fileUpload({ abortOnLimit: true, limits: { fileSize: 2 * 1024 * 1024 } })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  morgan("dev", {
    skip(req, res) {
      return res.statusCode < 400;
    },
    stream: process.stderr
  })
);

app.use(
  morgan("dev", {
    skip(req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout
  })
);

app.use("/api", api);
app.use("/auth", auth);

app.get("*", function rootRoute(req: any, res) {
  res
    .status(501)
    .send("this is where we'll send the html payload so we can do deep linking")
    .end();
});

app.listen(port, () => logger.info(`listening on port ${port}`));
