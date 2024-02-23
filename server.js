const express = require('express');
const path = require('path'); // Обязательно подключите модуль path

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('*', (_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'dist') }); // Указываем корневую директорию
});

app.listen(PORT, () => {
  console.log(`Приложение запущено http://localhost:${PORT}`);
});
