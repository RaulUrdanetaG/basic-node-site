import { createServer } from "http";
import { parse } from "url";
import { readFileSync, readFile } from "fs";

const page404 = readFileSync("404.html", "utf-8", (err, data) => {
  if (err) throw err;
  return data;
});

createServer((req, res) => {
  const q = parse(req.url, true);
  let filename = "";
  if (q.pathname === "/") {
    filename = "." + "/index.html";
  } else {
    filename = "." + q.pathname;
  }

  readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(page404);
      return res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
}).listen(8080);
