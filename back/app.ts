import Express from "express";

const app = Express();

app.get("/ping", (req, res) => res.send("pong"));

export default app;
