"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
// User login
exports.login = (req, res) => {
    const user = {
        name: "john doe",
        email: "johndoe@mail.com",
        id: 22,
        class: 1
    };
    //  Generate token
    auth_1.createToken(user, (err, token) => {
        if (!err)
            res.json(token);
    });
};
//# sourceMappingURL=login.js.map