import express from "express";
import { connect_db } from "./config/db";

const app = express();
connect_db().then(() => {
  app.listen(8000, () => {
    console.log("asd");
  });
});
