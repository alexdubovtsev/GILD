import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { modules } from "./modules.js";


document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;
	if (targetElement.closest('[data-parent]')) {
		const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		if (subMenu) {
            const activeLink = document.querySelector('._sub-menu-active-link');
            const activeBlock = document.querySelector('._sub-menu-open');


			if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active-link');
                activeBlock.classList.remove('_sub-menu-open');
                document.documentElement.classList.remove('_sub-catalog-active');
			}
            document.documentElement.classList.toggle('_sub-catalog-active');
            targetElement.classList.toggle('_sub-menu-active-link');
            subMenu.classList.toggle('_sub-menu-open');

		} else {
			console.log('Нет такого подменю')
		}
		e.preventDefault();
	}
	if (targetElement.closest('.menu-top-header__link_catalog')) {
		document.documentElement.classList.add('_catalog-active');
		e.preventDefault();
	}
	if (targetElement.closest('.menu-catalog__back')) {
		document.documentElement.classList.remove('_catalog-active');
		document.querySelector('._sub-menu-active-link') ? document.querySelector('._sub-menu-active-link').classList.remove('_sub-menu-active-link') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}
	if (targetElement.closest('.sub-menu-catalog__back')) {
		document.documentElement.classList.remove('_catalog-active');
		document.querySelector('._sub-menu-active-link') ? document.querySelector('._sub-menu-active-link').classList.remove('_sub-menu-active-link') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}
}



// if (document.querySelector('.filter-catalog__title')) {
// 	document.querySelector('.filter-catalog__title').addEventListener("click", function (e) {
// 		if (window.innerWidth < 992) {
// 			document.querySelector('.filter-catalog__items').classList.toggle('_active');
// 		}
// 	});
// }