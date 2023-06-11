const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth");

const server = jsonServer.create();
const authRouter = jsonServerAuth.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 2222;

server.use(middlewares);
server.db = authOptions.authFile;
const authOptions = {
  authFile: "users.json",
  authPropertyName: "username",
};
authRouter.use(jsonServerAuth(authOptions));
server.use(authRouter);

server.listen(port, () => {
  console.log("JSON Server is running on port " + port);
});