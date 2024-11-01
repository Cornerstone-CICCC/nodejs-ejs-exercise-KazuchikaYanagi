// This is your server file :)
import express from "express";
import path from "path";
import exerciseRouter from "./routes/exercise.routes";
import pageRouter from "./routes/page.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(express.json()); // accept incoming json
app.use(express.static(path.join(__dirname, "public"))); // Set public dir

app.use("/", pageRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
