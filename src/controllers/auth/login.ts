import { createToken } from "./auth";

// User login

export let login = (req, res) => {
 const user = {
  name: "john doe",
  email: "johndoe@mail.com",
  id: 22,
  class: 1
 };

 //  Generate token
 createToken(user, (err, token) => {
  if (!err) res.json(token);
 });
};
