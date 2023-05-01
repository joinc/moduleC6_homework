const wsUri = 'wss://echo-ws-service.herokuapp.com';

const chatContent = document.querySelector('.chat-content');
const chatInput = document.querySelector('.chat-input');
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

let websocket = new WebSocket(wsUri);
websocket.onmessage = function (evt) {
	showMessage(evt.data, 'in');
};

function showMessage(message, type) {
	let elem = document.createElement('p');
	elem.classList.add('message');
	elem.textContent = message;
	if (type === 'in') {
		elem.classList.add('message-in');
	} else if (type === 'link') {
		link = document.createElement('a');
		link.setAttribute('href', message);
		link.setAttribute('target', '_blank');
		link.textContent = 'Гео-локация';
		elem.classList.add('message-geo');
		elem.textContent = '';
		elem.appendChild(link);
	}
	chatContent.appendChild(elem);
	chatContent.scrollTo(0, chatContent.scrollHeight);
	chatInput.value = '';
}

btnSend.addEventListener('click', () => {
	const message = chatInput.value;
	if (message !== '') {
		showMessage(message);
		websocket.send(message);
	}
});

const error = () => {
	showMessage('Невозможно получить ваше местоположение.');
}

const success = (position) => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	showMessage(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`, 'link')
}

btnGeo.addEventListener('click', () => {
	if (!navigator.geolocation) {
		showMessage('Геолокация не поддерживается Вашим браузером.');
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
});
