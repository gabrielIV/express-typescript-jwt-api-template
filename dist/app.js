"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const status_1 = require("./controllers/status");
const auth_1 = require("./controllers/auth/auth");
const login_1 = require("./controllers/auth/login");
// Express APP config
const app = express();
app.set("port", process.env.PORT || 3500);
// API token authentication and authorization
app.use("/api", auth_1.verifyToken, auth_1.permit([1]));
// Authentication API Endpoints
app.get("/login", login_1.login);
// app Endpoints
app.get("/api/status", status_1.status);
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map