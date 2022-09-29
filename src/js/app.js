// FLS (Full Logging System) 
window['FLS'] = true;

// todo Main Modules

import * as functions from "./modules/functions.js";

/* Check webp support, add webp or no-webp class for HTML */
functions.isWebp();

/* Add touch class for HTML if the browser is mobile */
// functions.addTouchClass();

/* Add loaded class for HTML after full page load */
// functions.addLoadedClass();

/* Floating bar on mobile devices at 100vh */
// functions.fullVHfix();

/* Module Burger-menu */
functions.burgerMenu();

/* Module Spollers */
functions.spollers();

/* Module Show More */
// functions.showMore();

/* Module Tabs */
functions.tabs();

/* Module Popups */
import './libs/popup.js'

/* Module Mouse parallax */
// import './libs/parallax-mouse.js'

// todo Forms

import * as forms from "./modules/forms/forms.js";

forms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});

/* Form module submit */
//? send: data-ajax / data-dev / data-goto-error / data-popup-message="#popup" 
//? validation: data-required(="email") or data-validate + data-error="Error"
forms.formSubmit();

/* Form module "Quantity" */
// forms.formQuantity();

/* Form module "Star rating" */
// forms.formRating();

/* Form module "Select" */
import './libs/select.js'

/* Form module "Calendar" */
//? Add data-datepicker
// import './modules/forms/datepicker.js'

/* Form module "Masks" */
/* Configures: js/modules/forms/inputmask.js
Plugin documentation: https://github.com/RobinHerbots/inputmask */
// import "./modules/forms/inputmask.js";

/* Модуль работы с ползунком */
/* Configures: js/modules/forms/range.js
Plugin documentation: https://refreshless.com/nouislider/ */
import "./modules/forms/range.js";

/* Form module "Tippy" */
/* Configures: js/modules/tippy.js
Plugin documentation: https://atomiks.github.io/tippyjs/ */
import "./modules/tippy.js";


// todo Slider (Swiper)

/* 
Configures: js/modules/sliders.js
Plugin documentation: https://swiperjs.com/ */
// import "./modules/sliders.js";


// todo Scrollbar

// Change the design of the scrollbar
//? Add attribute "data-simplebar" to HTML block
/* Plugin documentation: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar */
// import './modules/scroll/simplebar.js';

/* Lazy loading
Configures: js/modules/sliders.js
Plugin documentation: https://github.com/verlok/vanilla-lazyload */
// import './modules/scroll/lazyload.js';

// Object Watcher
// ? Add attribute "data-watch" to HTML block
// import './libs/watcher.js'

// Функции работы скроллом
import * as scroll from "./modules/scroll/scroll.js";

// Smooth page navigation
scroll.pageNavigation();

// Adding classes to the header on scroll
// scroll.headerScroll();

// Sticky Block
// scroll.stickyBlock();


// todo Gallery (lightgalleryjs.com)

// Plugin documentation: https://www.lightgalleryjs.com/docs/ */
import "./modules/gallery.js";

// todo My code

/* Dynamic adaptive */
import "./libs/dynamic_adapt.js";

/* Number formatting */
// import './libs/wNumb.min.js';

import "./modules/script.js"; 



