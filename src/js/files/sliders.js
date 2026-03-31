/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Стилі Swiper (базові)
import "../../scss/base/swiper.scss";

let swiperLoader;
let trainingInitialized = false;
let feedbackInitialized = false;

function loadSwiper() {
	if (!swiperLoader) {
		swiperLoader = Promise.all([
			import('swiper'),
			import('swiper/modules'),
		]).then(([{ default: Swiper }, modules]) => ({ Swiper, modules }));
	}
	return swiperLoader;
}

function initTrainingSliders(Swiper, modules) {
	const { Navigation, Pagination, Thumbs, EffectFade } = modules;
	const mainSlider = document.querySelector('.training__slider');
	const thumbsSlider = document.querySelector('.training__slider-thumbs');

	if (trainingInitialized || !mainSlider || !thumbsSlider) {
		return;
	}
	trainingInitialized = true;

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
	if (feedbackInitialized || !feedbackSlider) {
		return;
	}
	feedbackInitialized = true;

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
function observeSlider(target, onIntersect) {
	const observer = new IntersectionObserver((entries, currentObserver) => {
		if (entries.some((entry) => entry.isIntersecting)) {
			currentObserver.disconnect();
			onIntersect();
		}
	}, {
		rootMargin: '200px 0px',
	});

	observer.observe(target);
}

async function initSlidersNow() {
	const { Swiper, modules } = await loadSwiper();
	initTrainingSliders(Swiper, modules);
	initFeedbackSlider(Swiper, modules);
}

function initSlidersOnDemand() {
	const trainingSlider = document.querySelector('.training__slider');
	const feedbackSlider = document.querySelector('.feedback__slider');
	if (!trainingSlider && !feedbackSlider) {
		return;
	}

	if (!('IntersectionObserver' in window)) {
		void initSlidersNow();
		return;
	}

	if (trainingSlider) {
		observeSlider(trainingSlider, async () => {
			const { Swiper, modules } = await loadSwiper();
			initTrainingSliders(Swiper, modules);
		});
	}

	if (feedbackSlider) {
		observeSlider(feedbackSlider, async () => {
			const { Swiper, modules } = await loadSwiper();
			initFeedbackSlider(Swiper, modules);
		});
	}
}

window.addEventListener("load", () => {
	// Запуск инициализации слайдеров
	initSlidersOnDemand();
});
