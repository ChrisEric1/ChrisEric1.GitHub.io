const express = require("express");
const fs = require("fs");
const path = require("path");
const request = require("request");
const app = express();
const indexHTML = fs.readFileSync(path.join(__dirname, "LCP.DBC.html"), { encoding: "utf8" });
const html = indexHTML;
app.all('/d/*', function(req, res) {
  const str = req.originalUrl;
  const trs = str.slice('\x32');
  req.pipe(request("https://discord.com" + trs)).pipe(res);
});
app.all('/sticker*', function(req, res) {
  const str = req.originalUrl;
  const trs = str;
  req.pipe(request("https://discord.com" + trs)).pipe(res);
});
app.all('/asset*', function(req, res) {
  const str = req.originalUrl;
  const trs = str;
  req.pipe(request("https://discord.com" + trs)).pipe(res);
});
app.all("*", (req, res) => {
  res.send(html);
});
app.listen(2022);
