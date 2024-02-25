import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'dist') });
});

app.listen(PORT, () => {
  console.log(`Приложение запущено http://localhost:${PORT}`);
});
