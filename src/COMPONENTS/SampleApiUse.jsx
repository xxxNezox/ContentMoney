import React, { useEffect, useState } from 'react';

function SampleApiUse() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Функция для выполнения Fetch-запроса
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.message);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData(); // Выполняем запрос при загрузке компонента
  }, []);

  return (
    <div>
      <h2>Данные с сервера:</h2>
      {data && !error ? <p>{data}</p> : null}
      {error ? <p>Произошла ошибка: {error}</p> : null}
    </div>
  );
}

export default SampleApiUse;
