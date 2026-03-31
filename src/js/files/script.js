// Підключення функціоналу "Чертоги Фрілансера"


const menuToggle = document.querySelector(".icon-menu");
const siteNavigation = document.querySelector(".menu__body");
const linksNavigation = document.querySelectorAll(".menu__link");

if (menuToggle && siteNavigation)
{
	menuToggle.addEventListener("click", () =>
	{
		const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
		if (isOpened)
		{
			closeMenu();
		} else
		{
			openMenu();
		}
	});

	linksNavigation.forEach(link =>
	{
		link.addEventListener("click", () =>
		{
			const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
			if (isOpened)
			{
				closeMenu();
			}
		});
	});
}

function openMenu()
{
	menuToggle.setAttribute("aria-expanded", "true");
	siteNavigation.setAttribute("data-state", "opened");
}
function closeMenu()
{
	menuToggle.setAttribute("aria-expanded", "false");
	siteNavigation.setAttribute("data-state", "closing");

	siteNavigation.addEventListener(
		"animationend",
		() =>
		{
			siteNavigation.setAttribute("data-state", "closed");
		},
		{ once: true }
	);
}

function syncSpollerAria(spollerTitle, index)
{
	const content = spollerTitle.nextElementSibling;
	const isExpanded = spollerTitle.classList.contains("_spoller-active");

	if (!spollerTitle.hasAttribute("role"))
	{
		spollerTitle.setAttribute("role", "button");
	}
	if (!spollerTitle.hasAttribute("tabindex"))
	{
		spollerTitle.setAttribute("tabindex", "0");
	}
	spollerTitle.setAttribute("aria-expanded", isExpanded ? "true" : "false");

	if (content)
	{
		if (!content.id)
		{
			content.id = `spoller-content-${index}`;
		}
		spollerTitle.setAttribute("aria-controls", content.id);
	}
}

function initSpollerA11y()
{
	const spollerTitles = document.querySelectorAll("[data-spoller]");
	spollerTitles.forEach((title, index) =>
	{
		syncSpollerAria(title, index);
	});
}

document.addEventListener("click", (event) =>
{
	const spollerTitle = event.target.closest("[data-spoller]");
	if (!spollerTitle)
	{
		return;
	}
	requestAnimationFrame(() =>
	{
		const index = Array.from(document.querySelectorAll("[data-spoller]")).indexOf(spollerTitle);
		syncSpollerAria(spollerTitle, index >= 0 ? index : 0);
	});
});

document.addEventListener("keydown", (event) =>
{
	const spollerTitle = event.target.closest("[data-spoller]");
	if (!spollerTitle)
	{
		return;
	}
	if (event.key === "Enter" || event.key === " ")
	{
		event.preventDefault();
		spollerTitle.click();
	}
});

window.addEventListener("resize", () =>
{
	initSpollerA11y();
});

initSpollerA11y();

// document.addEventListener('DOMContentLoaded', function ()
// {
// 	const form = document.getElementById('form');
// 	form.addEventListener('submit', formSend);
//
//
// 	async function formSend(e)
// 	{
// 		e.preventDefault();
//
// 		let error = formValidate(form);
// 		let formData = new FormData(form);
//
// 		if (error === 0)
// 		{
// 			form.classList.add('_sending')
// 			let response = await fetch('sendmail.php', {
// 				method: 'POST',
// 				body: formData
// 			});
// 			if (response.ok)
// 			{
// 				let result = await response.json();
// 				alert(result.message);
// 				form.reset();
// 				form.classList.remove('_sending')
// 			}
// 		} else
// 			alert('Что-то пошло не так')
// 		{
// 			alert('Заполните обязательные поля');
// 		}
// 	};
//
// 	function formValidate(form)
// 	{
// 		let error = 0;
// 		let formReq = document.querySelectorAll('._req');
//
//
// 		for (let index = 0; index < formReq.length; index++)
// 		{
// 			const input = formReq[index];
// 			formRemoveError(input);
//
// 			if (input.classList.contains('_email'))
// 			{
// 				if (emailTest(input))
// 				{
// 					formAddError(input);
// 					error++;
// 				} else if (input.getAttribute("type") === "checkbox" && input.checked === false)
// 				{
// 					formAddError(input);
// 					error++;
// 				} else
// 				{
// 					if (input.value === '')
// 					{
// 						formAddError(input);
// 						error++;
// 					}
// 				}
// 			}
//
// 		}
// 	}
//
// 	function formAddError(input)
// 	{
// 		input.parentElement.classList.add('._error');
// 		input.classList.add('._error');
// 	}
// 	function formRemoveError(input)
// 	{
// 		input.parentElement.classList.remove('._error');
// 		input.classList.remove('._error');
// 	}
//
// 	// Функция теста email
// 	function emailTest(input)
// 	{
// 		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// 	}
// })
