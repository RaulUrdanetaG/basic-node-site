// node only solution
// import { createServer } from "http";
// import { parse } from "url";
// import { readFileSync, readFile } from "fs";

// const page404 = readFileSync("404.html", "utf-8", (err, data) => {
//   if (err) throw err;
//   return data;
// });

// createServer((req, res) => {
//   const q = parse(req.url, true);
//   let filename = "";
//   if (q.pathname === "/") {
//     filename = "." + "/index.html";
//   } else {
//     filename = "." + q.pathname;
//   }

//   readFile(filename, function (err, data) {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.write(page404);
//       return res.end();
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     }
//   });
// }).listen(8080);

// express solution

import express from "express";
import { readFileSync } from "fs";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(readFileSync("./index.html", "utf8"));
});

app.get("/about.html", (req, res) => {
  res.send(readFileSync("./about.html", "utf8"));
});

app.get("/contact-me.html", (req, res) => {
  res.send(readFileSync("./contact-me.html", "utf8"));
});

app.use((req, res) => {
  res.status(404).send(readFileSync("./404.html", "utf8"));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
