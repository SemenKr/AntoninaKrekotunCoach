// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const menuToggle = document.querySelector(".icon-menu");
const siteNavigation = document.querySelector(".menu__body");

menuToggle.addEventListener("click", () =>
{
	const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
	if (isOpened ? closeMenu() : openMenu());
});

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

