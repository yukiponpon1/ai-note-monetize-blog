const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(process.cwd(), "out");
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

const findFile = (requestUrl) => {
  const cleanUrl = decodeURIComponent(requestUrl.split("?")[0] || "/")
    .replace(/^\/+/, "")
    .replace(/\.\./g, "");

  const candidates = [
    path.join(root, cleanUrl),
    path.join(root, cleanUrl, "index.html"),
    path.join(root, `${cleanUrl}.html`),
  ];

  return candidates.find(
    (candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile(),
  );
};

const server = http.createServer((request, response) => {
  const filePath = findFile(request.url || "/");

  if (!filePath) {
    response.writeHead(404, {
      "content-type": "text/plain; charset=utf-8",
    });
    response.end("ページが見つかりません。");
    return;
  }

  response.writeHead(200, {
    "content-type":
      contentTypes[path.extname(filePath)] || "application/octet-stream",
  });
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port, host, () => {
  console.log(`ローカル確認URL: http://${host}:${port}`);
});
