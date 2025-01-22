import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import Adminroutes from "./routes/Adminroutes.js";
import FormDataroutes from "./routes/FormDataroutes.js";
import cors from "cors";
import Dbconnection from "./Config/Db.js";
import path from "path";
import { fileURLToPath } from "url";

//rest Object
const app = express();
//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//config env
dotenv.config();

//database connection
Dbconnection();

//Port
const port = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./badatalaabfrontend/build")));

//routes
app.use("/api/v1/admin", Adminroutes);
app.use("/api/v1/formdata", FormDataroutes);

//rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./badatalaabfrontend/build/index.html"));
});

app.listen(port, () => {
  console.log(`server is running on ${process.env.Mode} in port: ${port}`);
});
