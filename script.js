const http = require("http");
let count = 1;
let count1 = 1;
const server = http.createServer((req, res) => {
  console.log("Запрос получен!");

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1>Корневая страница</h1> <h2>Просмотров: ${count++}</h2>
    <a href="http://127.0.0.1:3302/about">Ссылка на страницу /about</a>`);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1>Страница About</h1><h2>Просмотров: ${count1++}</h2>
    <a href="http://127.0.0.1:3302/">Ссылка на страницу /</a>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end("<h1>Not found!</h1>");
  }
});
const port = 3302;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
