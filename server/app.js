import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import userRoute from './routes/user.routes.js'
import tournamentRoute from './routes/tournament.routes.js'
import authRoute from './routes/auth.routes.js'
import initialUser from './seed-data/user.js'
import initTournament from "./seed-data/tournament.js";
import RedisStore from "connect-redis"
import redisClient from './config/redis.config.js'
import session from "express-session"
const app = express();
// Middlewares
app.use(express.json());
// adding cookieParser to middleware stack
app.use(cookieParser());
// helmet để che dấu header
app.use(helmet());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
// parse requests of content-type - application/json
app.use(cors(corsOptions))

// Initialize store redis
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "appleStoreRedis:::",
})

// Create a session middleware with the given options.
app.use(
  session({
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: "keyboard cat",
  })
)
// seed data
await initialUser()
await initTournament()
app.use("/", userRoute);
app.use('/tournaments', tournamentRoute)
app.use('/auth', authRoute)
// Handle error when not match route
app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

export default app;
