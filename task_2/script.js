const btn = document.querySelector('.btn');

const windowWidth = window.screen.width;
const windowHeight = window.screen.height;

btn.addEventListener('click', () => {
	const clientInnerWidth = window.innerWidth;
	const clientInnerHeight = window.innerHeight;
	const clientWidth = document.documentElement.clientWidth;
	const clientHeight = document.documentElement.clientHeight;
	alert(
`Размеры экрана монитора: ${windowWidth} x ${windowHeight}
Размер экрана браузера с учётом полосы прокрутки: ${clientInnerWidth} x ${clientInnerHeight}
Размер экрана браузера без учёта полосы прокрутки: ${clientWidth} x ${clientHeight}`
	);
});
