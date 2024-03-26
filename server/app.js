import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import userRoute from './routes/user.routes.js'
import initialUser from './seed-data/user.js'
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
app.use(cors(corsOptions));

// seed data
await initialUser()
app.use("/", userRoute);

// Handle error when not match route
app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 500;
  next(error);
});

export default app;
