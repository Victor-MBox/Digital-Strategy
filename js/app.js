'use strict'

function initSwiper() {
	if (window.swiperInstance) {
		window.swiperInstance.destroy(true, true)
		window.swiperInstance = null
	}

	// Получаем ширину окна
	const screenWidth =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth

	// Инициализируем слайдер, только если ширина экрана меньше 767 пикселей
	if (screenWidth < 767) {
		window.swiperInstance = new Swiper('.swiper', {
			loop: true,
			slidesPerView: 1.2,
			/* breakpoints: {
				480: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1.2,
				},
			}, */
		})
	} 
}

// Инициализируем слайдер при загрузке содержимого страницы
document.addEventListener('DOMContentLoaded', initSwiper)

// Переинициализируем слайдер при изменении размеров окна
window.addEventListener('resize', initSwiper)
