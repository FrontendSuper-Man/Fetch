let dataUser;

const getData = () => {
	return fetch('./db.json') // Возвращаем fetch, чтобы можно было использовать then
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			dataUser = data; // Присваиваем данные переменной
			return dataUser; // Возвращаем данные для последующего использования
		})
		.catch((error) => {
			console.log(error);
		});
};

const sendData = (data) => {
	setTimeout(() => {
		fetch('http://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				return response.json(); // Преобразуем ответ в JSON
			})
			.then((data) => {
				console.log('Данные отправлены:', data); // Логируем ответ сервера
			})
			.catch((error) => console.error('Ошибка:', error));
	}, 2000);
};

// Используем getData, чтобы получить данные, а затем вызываем sendData
getData().then((data) => {
	sendData(data); // Передаем загруженные данные в sendData
});
