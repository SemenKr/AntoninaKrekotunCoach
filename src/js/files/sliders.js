/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Стилі Swiper (базові)
import "../../scss/base/swiper.scss";

function initTrainingSliders(Swiper, modules) {
	const { Navigation, Pagination, Thumbs, EffectFade } = modules;
	const mainSlider = document.querySelector('.training__slider');
	const thumbsSlider = document.querySelector('.training__slider-thumbs');

	if (!mainSlider || !thumbsSlider) {
		return;
	}

	const thumbsSwiper = new Swiper(thumbsSlider, {
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 25,
		direction: 'vertical',
		speed: 800,
		breakpoints: {
			1330: {
				slidesPerView: 2,
				spaceBetween: 16,
				direction: 'horizontal',
			},
		},
	});

	new Swiper(mainSlider, {
		modules: [Navigation, Pagination, Thumbs, EffectFade],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		loop: true,
		preloadImages: false,
		effect: 'fade',
		pagination: {
			el: '.swiper-paginations',
			clickable: true,
		},
		thumbs: {
			swiper: thumbsSwiper
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.slider-button-next',
		},
	});
}

function initFeedbackSlider(Swiper, modules) {
	const { Pagination } = modules;
	const feedbackSlider = document.querySelector('.feedback__slider');
	if (!feedbackSlider) {
		return;
	}

	new Swiper(feedbackSlider, {
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 20,
		autoHeight: true,
		speed: 800,
		loop: true,
		preloadImages: false,
		pagination: {
			el: '.feedback__swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			600: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
		},
	});
}
async function initSliders() {
	const hasSliders = document.querySelector('.training__slider, .feedback__slider');
	if (!hasSliders) {
		return;
	}

	const [{ default: Swiper }, modules] = await Promise.all([
		import('swiper'),
		import('swiper/modules'),
	]);

	initTrainingSliders(Swiper, modules);
	initFeedbackSlider(Swiper, modules);
}

window.addEventListener("load", () => {
	// Запуск инициализации слайдеров
	void initSliders();
});
