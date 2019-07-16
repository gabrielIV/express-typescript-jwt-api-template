import express = require("express");
import { status } from "./controllers/status";
import { verifyToken, permit } from "./controllers/auth/auth";
import { login } from "./controllers/auth/login";

// Express APP config
const app = express();
app.set("port", process.env.PORT || 3500);

// API token authentication and authorization
app.use("/api", verifyToken, permit([1]));

// Authentication API Endpoints
app.get("/login", login);

// app Endpoints
app.get("/api/status", status);

// export our app
export default app;
