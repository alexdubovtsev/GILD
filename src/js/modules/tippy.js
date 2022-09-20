import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { modules } from "./modules.js";

// Подключение из node_modules
import tippy from 'tippy.js';

// Запускаем и добавляем в объект модулей
modules.tippy = tippy('[data-tippy-content]', {

});