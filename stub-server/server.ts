const jsonServe = require("json-server");

const server = jsonServe.create();
const router = jsonServe.router("stub-server/db.json");
const middlewares = jsonServe.defaults();

server.use((req, res, next) => {
  if (req.method === "DELETE" && req.query["_cleanup"]) {
    const db = router.db;
    db.set("books", []).write();
    res.sendStatus(204);
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log("JSON server is runnig");
});
