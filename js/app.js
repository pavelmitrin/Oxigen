const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


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
const header = document.querySelector("header.header");
const nav = header.querySelector("nav.navbar");
const head = document.querySelector("section.head");

window.addEventListener('load', () => {
	if (window.innerWidth < 992) {
		checkScroll();
		head.style.paddingTop = 0;
	} else {
		head.style.paddingTop = `${nav.offsetHeight}px`;
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
		head.style.paddingTop = 0;
	} else {
		header.classList.remove("d-none");
		head.style.paddingTop = `${nav.offsetHeight}px`;
	}
});


//* inputMask */
const telInput = document.querySelectorAll(".o-modal__input");
const telMask = new Inputmask("+7(999)999-99-99");
telInput.forEach((el)=> {
	telMask.mask(el);
})


/* validate form */
const forms = document.querySelectorAll('.needs-validation')
document.querySelector('[name="requiPhoneCall"]').addEventListener('input', ()=> {
	let a = document.querySelector('[name="requiPhoneCall"]').value;
	a = a.replace(/\D+/g, '')
	console.log(/\d{11}/g.test(a));
})
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
forms.forEach((form => {
	form.addEventListener('submit', event=> {
		if (!addValidate(form)) {
			event.preventDefault();
			event.stopPropagation();
		}
	})
}))
function addValidate(form) {
	const inp = form.querySelector('input');
		let val = inp.value;
		let correct = val.replace(/\D+/g, '');
		correct = /\d{11}/g.test(correct);
		console.log(correct);
		return correct;
}

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
const form = document.querySelector("#presentation__modal");
form.addEventListener("submit", (e)=> {
	get_file_url("../files/кислород буклет.pdf");
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

const absoluteBtnIcon = document.querySelector('.o-absolute__tel');
setInterval(() => {
	setInterval(() => {
		absoluteBtnIcon.classList.add('anime');
	}, 1500);
	absoluteBtnIcon.classList.remove('anime');
}, 7000);