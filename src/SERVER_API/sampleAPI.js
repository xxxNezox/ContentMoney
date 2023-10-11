const express = require('express');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Маршрут API
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API' });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});