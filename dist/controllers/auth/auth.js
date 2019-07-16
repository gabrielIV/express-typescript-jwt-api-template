"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const secretKey = "secret";
// create token
exports.createToken = (user, callback) => {
    jwt.sign({ user }, secretKey, (err, token) => {
        callback(err, token);
    });
};
// Token verification
exports.verifyToken = (req, res, next) => {
    // Get auth value
    let token = req.headers["authorization"];
    // Check if defined
    if (typeof token !== "undefined") {
        // verifyToken
        jwt.verify(token, secretKey, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            }
            else {
                // set token
                req.authData = authData;
                // Next middleware
                next();
            }
        });
    }
    else {
        res.sendStatus(403);
    }
};
exports.permit = classes => {
    return function (req, res, next) {
        let { authData } = req;
        //   console.log();
        if (classes.includes(authData.user.class)) {
            next();
        }
        else {
            res.sendStatus(403);
        }
    };
};
//# sourceMappingURL=auth.js.map