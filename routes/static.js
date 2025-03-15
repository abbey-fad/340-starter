const express = require("express");
const path = require("path");
const router = express.Router();
const app = express();


// Serve static files from "public" and its subfolders
router.use(express.static(path.join(__dirname, "../public"))); // Use ".." to go up one level if needed
router.use("/css", express.static(path.join(__dirname, "../public/css")));
router.use("/js", express.static(path.join(__dirname, "../public/js")));
router.use("/images", express.static(path.join(__dirname, "../public/images")));
app.use(express.static(path.join(__dirname, 'public')));


module.exports = router;
