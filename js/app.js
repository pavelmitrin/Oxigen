const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

/* modal */

const modalPresentation = document.querySelector("#presentation");
const imgWrapper = modalPresentation.querySelector(".order-lg-1");

function modalImgAbsolute() {
	if (window.innerWidth < 992) {
		imgWrapper.classList.add("position-absolute", "w-75", "top-0", "start-50", "translate-middle");
	} else {
		imgWrapper.classList.remove("position-absolute", "w-75", "top-0", "start-50", "translate-middle");
	}
}
// window.addEventListener('load', modalImgAbsolute);
// window.addEventListener('resize', modalImgAbsolute)
/* .modal */

const swiperOne = new Swiper('.o-swiper-carouselOne', {
	effect: "coverflow",  
	loop: true,
	centeredSlides: true,
	slidesPerView: 1,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
	spaceBetween: 60,
	breakpoints: {
		768: {
			slidesPerView: 1.5
		},
		1200: {
			slidesPerView: 1.75
		},
		1650: {
			slidesPerView: 2
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
const swiper = new Swiper('.o-progress__swiper', {
	loop: true,
	centeredSlides: true,
	slidesPerView: 1,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
	}
});

// toggle header
function checkScroll() {
	if (window.scrollY > 100) {
		header.classList.remove("d-none");
	} else {
		header.classList.add("d-none");
	}
}
const header = document.querySelector(".header");
window.addEventListener('load', () => {
	if (window.innerWidth < 992) {
		checkScroll();
	}
})
window.addEventListener('scroll', () => {
	if (window.innerWidth < 992) {
		checkScroll();
	}
});
window.addEventListener('resize', () => {
	if (window.innerWidth < 992) {
		checkScroll();
	}
});
// window.addEventListener('scroll', checkScroll);
// window.addEventListener('load', checkScroll);


/* modal */
const exampleModal = document.getElementById('presentation')
exampleModal.addEventListener('show.bs.modal', event => {
	// Кнопка, которая активировала модальное окно
	const button = event.relatedTarget
	// Извлекает информацию из атрибутов data-bs-*
	const recipient = button.getAttribute('data-bs-whatever')
	const recipient0 = recipient.replace('@', '');
	/* data */
	const allWhateverValue = {
		call: {
			name: "Обратный звонок",
			text: "Как правило перезваниваем в течение 15 минут",
			img: "img/modals/phone.png",
			btnText: "Отправить",
		},
		presentation: {
			name: "Скачайте презентацию",
			text: "Укажите свои контактные данные и скачайте презентацию <strong>в один клик</strong>",
			img: "img/modals/1.png",
			btnText: "Скачать презентацию",
		},
		layout: {
			name: "Планировки и цены",
			text: "Наш менеджер свяжется, уточнит желаемые планировки и отправит информацию",
			img: "img/modals/plans.jpg",
			btnText: "Получить",
		},
		show: {
			name: "Запись на показ",
			text: "Наш менеджер свяжется и Вы запланируете удобную дату и время показа",
			img: "img/modals/phone.png",
			btnText: "Отправить",
		},
	}
	let name =  allWhateverValue[recipient0].name;
	let text = allWhateverValue[recipient0].text;
	let img = allWhateverValue[recipient0].img;
	let btnText = allWhateverValue[recipient0].btnText;

	//
	// Обновляет содержимое модального окна.
	const modalTitle = exampleModal.querySelector('.c-modal__title')
	const modalText = exampleModal.querySelector('.c-presentation__text');
	const modalImg = exampleModal.querySelector('.c-presentation-modal__img');
	const modalBtn = exampleModal.querySelector('.c-presentation__modal-btn');

	for (const key in allWhateverValue) {
		exampleModal.classList.remove(`c-presentation-modal__img-${key}`);
	}
	exampleModal.classList.add(`c-presentation-modal__img-${recipient0}`);


	modalTitle.textContent = name;
	modalText.innerHTML = `${text}`;
	modalImg.setAttribute('src', `${img}`);
	modalBtn.textContent = btnText;


})

/* modalCarousel */
const exampleModalCarousel = document.getElementById('prevLayoutsCarousel');
exampleModalCarousel.addEventListener('show.bs.modal', event => {
	// Кнопка, которая активировала модальное окно
	const button = event.relatedTarget
	// Извлекает информацию из атрибутов data-bs-*
	const recipient = button.getAttribute('data-o-layout-num');
	/* data */
	const countImage = {
		One: 4,
		Two: 4,
		Three: 4,
		Four: 4,
	}
	let count = countImage[recipient];
	const modalSlideWrapper = exampleModalCarousel.querySelector(".swiper-wrapper");
	modalSlideWrapper.innerHTML = "";
	// Обновляем содержимое модального окна.
	for (let index = 1; index <= count; index++) {
		modalSlideWrapper.insertAdjacentHTML('beforeend', `<div class="swiper-slide">
		<img src="img/layouts/${recipient}/${index}.jpg" class="img-fluid" alt="">
	</div>`
		)
	}


	const ModalSwiper = new Swiper('.o-modal-carousel__container', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 1,
	centeredSlides: true,
});
})

/* inputMask */
const telInput = document.querySelector("#modalTel");
const telMask = new Inputmask("+7(999)999-99-99");
telMask.mask(telInput);


/* validate form */
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
   form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
      }

      form.classList.add('was-validated')
	}, false)
})

// Download presentation
function get_file_url(url) {
	
	var link_url = document.createElement("a");
	
	link_url.download = url.substring((url.lastIndexOf("/") + 1), url.length);
	link_url.href = url;
	document.body.appendChild(link_url);
	link_url.click();
	document.body.removeChild(link_url);
	delete link_url;

}
const btnModalPresentation = document.querySelector("#downloadPresentation");
const form = document.querySelector("#presentation");
form.addEventListener("submit", (e)=> {
	if (e.target.closest(".c-presentation-modal__img-presentation")) {
		get_file_url("../files/кислород буклет.pdf");
	}
})


function errorSendMail() {
	const alertModal = document.querySelector('#alertMessage');
	new bootstrap.Modal(alertModal).show()
}


const allAnimItem = document.querySelectorAll('.anim__item');
if (allAnimItem.length > 0) {
	window.addEventListener("scroll", animScroll);
	function animScroll() {
		for (let index = 0; index < allAnimItem.length; index++) {
			const animItem = allAnimItem[index];
			const animItemHeigh = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			
			let animItemPoint = window.innerHeight - animItemHeigh / animStart;
			
			if (animItemHeigh > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if (scrollY > (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeigh)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
			
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
}
animScroll();