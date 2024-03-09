/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 180:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ 852:
/***/ (() => {

const headerLinkBtns = document.querySelectorAll('.header-logo-links')
const filterItems = document.querySelectorAll('.filter__item')

function handleToggleOnBtns(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('active')
            })
            button.classList.add('active')
        })
    })
}
handleToggleOnBtns(headerLinkBtns)
handleToggleOnBtns(filterItems)

const burgerMenuBtn = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.nav')

burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('is-open')
    navMenu.classList.toggle('is-open')
})


const toggleNavBtns = document.querySelectorAll('.nav__link-arrow')

toggleNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target')
        const targetItem = document.getElementById(targetId)

        if (targetItem.classList.contains('is-show')) {
            btn.style.setProperty('transform', 'rotate(0deg)')
            targetItem.classList.remove('is-show')
        } else {
            btn.style.setProperty('transform', 'rotate(180deg)')
            targetItem.classList.add('is-show')
        }
    })
})

const toggleFooterBtns = document.querySelectorAll('.footer__title-arrow')

toggleFooterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target')
        const targetItem = document.getElementById(targetId)

        if (targetItem.classList.contains('is-show')) {
            btn.style.setProperty('transform', 'rotate(0deg)')
            targetItem.classList.remove('is-show')
        } else {
            btn.style.setProperty('transform', 'rotate(180deg)')
            targetItem.classList.add('is-show')
        }
    })
})

/***/ }),

/***/ 544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons\\header-logo..svg";

/***/ }),

/***/ 724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bc764cf0b83a19493292.png";

/***/ }),

/***/ 96:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "213255f4e5edeec4a680.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			590: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(180);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(544), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(96), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(724), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>Creative Cult</title> </head> <body> <header class=\"header\"> <div class=\"container\"> <div class=\"header__inner\"> <div class=\"header__lists\"> <div class=\"header__list header__list-nav\"> <a href=\"#\" class=\"header__link\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" class=\"header__logo\"> </a> <a href=\"#\" class=\"header__link active header__link-opacity header-logo-links\">Холдинг</a> <a href=\"#nordCore\" class=\"header__link header__link-opacity header-logo-links\">Nordcore</a> <a href=\"#swift\" class=\"header__link header__link-opacity header-logo-links\">Swift Technical</a> </div> <div class=\"header__list mobile-desktop\"> <div class=\"header__item\"> <a href=\"mailto:example@example.com\" class=\"header__link header__link-email\"></a> </div> <div class=\"header__item\"> <a href=\"tel:+7(495)6636500\" class=\"header__link header__link-tel\"> </a> </div> <div class=\"header__item\"> <div class=\"burger-menu is-open\"> <span class=\"burger__line\"></span> <span class=\"burger__line\"></span> <span class=\"burger__line\"></span> </div> </div> </div> <div class=\"header__list laptop-desktop\"> <div class=\"header__item\"> <span class=\"header__item-link\">ru</span> </div> </div> <div class=\"header__list laptop-desktop\"> <div class=\"header__item\"> <a href=\"mailto:example@example.com\" class=\"header__link header__link-email\"></a> </div> <div class=\"header__item laptop-desktop\"> <a href=\"tel:+7(495)6636500\" class=\"header__link header__link-tel\">+7 (495) 663-65-00</a> </div> </div> </div> <nav class=\"nav is-open\"> <ul class=\"nav__lists\"> <li class=\"nav__item nav__item-services\"> <div class=\"nav__link-wrapper\"> <a href=\"#team\" class=\"nav__link\">Услуги</a> <span class=\"nav__link-arrow\" data-target=\"item-1\"></span> </div> <ul class=\"nav__sublist is-show\" id=\"item-1\"> <li class=\"nav__sub-item\"> <a href=\"#consultation\" class=\"nav__sub-link\">Подбор персонала</a> </li> <li class=\"nav__sub-item\"> <a href=\"#consultation\" class=\"nav__sub-link\">Временный персонал</a> </li> <li class=\"nav__sub-item\"> <a href=\"#consultation\" class=\"nav__sub-link\">Консультационные услуги</a> </li> <li class=\"nav__sub-item\"> <a href=\"#consultation\" class=\"nav__sub-link\">Обучение и оценка</a> </li> </ul> </li> <li class=\"nav__item\"> <a href=\"#about\" class=\"nav__link\">О холдинге</a> </li> <li class=\"nav__item\"> <a href=\"#cases\" class=\"nav__link\">Кейсы</a> </li> <li class=\"nav__item nav__item-media\"> <div class=\"nav__link-wrapper\"> <a href=\"#team\" class=\"nav__link\">Медиа</a> <span class=\"nav__link-arrow\" data-target=\"item-2\"></span> </div> <ul class=\"nav__sublist is-show\" id=\"item-2\"> <li class=\"nav__sub-item\"> <a href=\"#success\" class=\"nav__sub-link\">Последние материалы</a> </li> <li class=\"nav__sub-item\"> <a href=\"#success\" class=\"nav__sub-link\">Статьи</a> </li> <li class=\"nav__sub-item\"> <a href=\"#success\" class=\"nav__sub-link\">Гайды</a> </li> <li class=\"nav__sub-item\"> <a href=\"#success\" class=\"nav__sub-link\">Новости</a> </li> </ul> </li> <li class=\"nav__item\"> <a href=\"#work\" class=\"nav__link\">Вакансии</a> </li> <li class=\"nav__item\"> <a href=\"#contacts\" class=\"nav__link\">Контакты</a> </li> </ul> <div class=\"nav__lists-btn\"> <div class=\"nav__btn-item\"> <button type=\"submit\" class=\"nav__btn nav__btn-resume\">Отправить резюме</button> </div> <div class=\"nav__btn-item\"> <button type=\"submit\" class=\"nav__btn nav__btn-project\">Обсудить проект</button> </div> </div> </nav> </div> </div> </header> <main> <div class=\"solution\"> <section class=\"complex\"> <div class=\"container\"> <div class=\"complex__descr\"> <div class=\"section__title\"> <div class=\"title__wrapper\"> <span class=\"accent-color accent-color-light_blue\">// </span> <h2 class=\"title\" id=\"about\"> Комплексные</h2> <div class=\"title__accent-wrapper title__wrapper-light_blue\"> <span class=\"title__accent title__accent-light_blue\">кадровые</span> <span class=\"title__accent title__accent-light_blue\">решения</span> </div> <p class=\"title__text\">Консалтинговая компания Nordcore & Swift Technical занимается подбором и предоставлением высококвалифицированного персонала для крупнейших российских и международных компаний.</p> </div> </div> </div> <div class=\"about about-complex\"> <div class=\"about__item\"> <div class=\"about__title-wrapper\"> <span class=\"accent-about__title\">2 </span> <p class=\"about__title\">офиса</p> </div> <div class=\"about__text\">В Москве и Южно-Сахалинске</div> </div> <div class=\"about__item\"> <div class=\"about__title-wrapper\"> <span class=\"accent-about__title\">25 </span> <p class=\"about__title\">лет </p> </div> <div class=\"about__text\">Помогаем компаниям</div> </div> <div class=\"about__item\"> <div class=\"about__title-wrapper\"> <span class=\"accent-about__title\">2 </span> <p class=\"about__title\">офиса</p> </div> <div class=\"about__text\">В Москве и Южно-Сахалинске</div> </div> <div class=\"about__item\"> <div class=\"about__title-wrapper\"> <span class=\"accent-about__title\">25 </span> <p class=\"about__title\">лет </p> </div> <div class=\"about__text\">Помогаем компаниям</div> </div> </div> </div> </section> <div class=\"section-wallet\"> <div class=\"container\"> <div class=\"section-wallet_inner\"> <div class=\"section-wallet__item section-wallet__item-orange\"> <div class=\"section-wallet__content\"> <div class=\"section-wallet__wrapper\"> <h4 class=\"section-wallet__title\">Swift Technical</h4> <a href=\"#\" class=\"section-wallet__title-link\"></a> </div> <p class=\"section-wallet__text\"> Подбор, временный персонал, технико-консультационные услуги </p> <ul class=\"section-wallet__tags\"> <li class=\"section-wallet__tag section-wallet__tag-orange\">Подбор персонала</li> <li class=\"section-wallet__tag section-wallet__tag-orange section-wallet__tag-slash\"> //</li> <li class=\"section-wallet__tag section-wallet__tag-orange\">Временный персонал</li> <li class=\"section-wallet__tag section-wallet__tag-orange\">Консультационные услуги </li> <li class=\"section-wallet__tag section-wallet__tag-orange section-wallet__tag-slash\"> //</li> <li class=\"section-wallet__tag section-wallet__tag-orange\">Еще одна услуга</li> </ul> </div> </div> <div class=\"section-wallet__item section-wallet__item-green\"> <div class=\"section-wallet__content\"> <div class=\"section-wallet__wrapper\"> <h4 class=\"section-wallet__title\">Nordcore</h4> <a href=\"#\" class=\"section-wallet__title-link\"></a> </div> <p class=\"section-wallet__text\"> Карьерное консультирование B2C и корпоративное обучение B2B </p> <ul class=\"section-wallet__tags section-wallet__tags-green\"> <li class=\"section-wallet__tag section-wallet__tag-green\">Обучение и оценка</li> <li class=\"section-wallet__tag section-wallet__tag-green section-wallet__tag-slash\"> //</li> <li class=\"section-wallet__tag section-wallet__tag-green\">Консультационные услуги </li> <li class=\"section-wallet__tag section-wallet__tag-green section-wallet__tag-slash\"> //</li> </ul> </div> </div> </div> </div> </div> <section class=\"team\"> <div class=\"container\"> <div class=\"team__descr\"> <button type=\"submit\" class=\"nav__btn nav__btn-project team__btn\" id=\"team\">Подробнее о холдинге</button> <div class=\"section__title\"> <div class=\"title__wrapper\"> <div class=\"accent-color_purple-wrapper\"> <span class=\"accent-color accent-color_purple\">// </span> <h2 class=\"title title-purple\"> Формируем команды,</h2> </div> <div class=\"title__accent-wrapper title__wrapper_purple\"> <span class=\"title__accent title__accent_purple\">подбираем </span> <span class=\"title__accent title__accent_purple\">специалистов</span> </div> <p class=\"title__text\">Собираем эффективные команды и помогаем ими управлять. В любых формах занятости, для решения любых задач.</p> </div> </div> </div> <div class=\"about about-team\"> <div class=\"about__item\"> <div class=\"about__title-wrapper\"> <span class=\"accent-about__title\">78 </span> <p class=\"about__title\">%</p> </div> <div class=\"about__text\">Высокий процент закрытия вакансий</div> </div> <div class=\"about__item\"> <div class=\"about__title-wrapper\"> <span class=\"accent-about__title\">20–40 </span> <p class=\"about__title\">дней </p> </div> <div class=\"about__text\">Средний срок закрытия вакансий</div> </div> <div class=\"about__item\"> <div class=\"about__title-wrapper\"> <span class=\"accent-about__title\">1000 </span> </div> <div class=\"about__text\">Сотрудников подобрали за 25 лет</div> </div> <div class=\"about__item\"> <div class=\"about__title-wrapper\"> <span class=\"accent-about__title\">300 000 </span> </div> <div class=\"about__text\">Специалистов в собственной базе</div> </div> </div> </div> </section> </div> <section class=\"services services-bg_gray\"> <div class=\"container\"> <div class=\"services__inner\"> <h2 class=\"services__title\" id=\"nordCore\">Услуги Nordcore</h2> <div class=\"section-wallet_inner\"> <div class=\"section-wallet__item section-wallet__item-green-mix\"> <div class=\"section-wallet__content\"> <div class=\"section-wallet__wrapper\"> <h4 class=\"section-wallet__title\">Консультации</h4> <a href=\"#\" class=\"section-wallet__title-link\"></a> </div> <p class=\"section-wallet__text\"> Это обучающая платформа, которая собрала в себе полную коллекцию лучших курсов по карьерному консультированию, эйчар и повышению квалификации. </p> </div> </div> <div class=\"section-wallet__item section-wallet__item-greeny-mix\"> <div class=\"section-wallet__content\"> <div class=\"section-wallet__wrapper\"> <h4 class=\"section-wallet__title\">Обучение и оценка</h4> <a href=\"#\" class=\"section-wallet__title-link\"></a> </div> <p class=\"section-wallet__text\"> Это обучающая платформа, которая собрала в себе полную коллекцию лучших курсов по карьерному консультированию, эйчар и повышению квалификации. </p> </div> </div> </div> <button class=\"services__btn\">Показать все услуги</button> </div> </div> </section> <section class=\"services services-bg_light-gray\"> <div class=\"container\"> <div class=\"services__inner\"> <h2 class=\"services__title\" id=\"swift\">Услуги Swift Technical</h2> <div class=\"section-wallet_inner\"> <div class=\"section-wallet__item section-wallet__item-orange-1\"> <div class=\"section-wallet__content\"> <div class=\"section-wallet__wrapper\"> <h4 class=\"section-wallet__title\">Консультации</h4> <a href=\"#\" class=\"section-wallet__title-link\"></a> </div> <p class=\"section-wallet__text\"> Это обучающая платформа, которая собрала в себе полную коллекцию лучших курсов по карьерному консультированию, эйчар и повышению квалификации. </p> </div> </div> <div class=\"section-wallet__item section-wallet__item-orange-2\"> <div class=\"section-wallet__content\"> <div class=\"section-wallet__wrapper\"> <h4 class=\"section-wallet__title\">Обучение и оценка</h4> <a href=\"#\" class=\"section-wallet__title-link\"></a> </div> <p class=\"section-wallet__text\"> Это обучающая платформа, которая собрала в себе полную коллекцию лучших курсов по карьерному консультированию, эйчар и повышению квалификации. </p> </div> </div> <div class=\"section-wallet__item section-wallet__item-orange-3\"> <div class=\"section-wallet__content\"> <div class=\"section-wallet__wrapper\"> <h4 class=\"section-wallet__title\">Консультации</h4> <a href=\"#\" class=\"section-wallet__title-link\"></a> </div> <p class=\"section-wallet__text\"> Это обучающая платформа, которая собрала в себе полную коллекцию лучших курсов по карьерному консультированию, эйчар и повышению квалификации. </p> </div> </div> <div class=\"section-wallet__item section-wallet__item-orange-4\"> <div class=\"section-wallet__content\"> <div class=\"section-wallet__wrapper\"> <h4 class=\"section-wallet__title\">Обучение и оценка</h4> <a href=\"#\" class=\"section-wallet__title-link\"></a> </div> <p class=\"section-wallet__text\"> Это обучающая платформа, которая собрала в себе полную коллекцию лучших курсов по карьерному консультированию, эйчар и повышению квалификации. </p> </div> </div> </div> <button class=\"services__btn\">Показать все услуги</button> </div> </div> </section> <section class=\"services services-bg_deep-blue\"> <div class=\"container\"> <div class=\"services__inner\"> <h2 class=\"services__title services__title-white\" id=\"cases\">Кейсы</h2> <div class=\"section__cards\"> <div class=\"section__cards-item section__cards-item_schneider\"> <ul class=\"card__tags\"> <li class=\"card__tag card__tag-orange\">Schneider Electric</li> </ul> <div class=\"card__content\"> <p class=\"card__text\"> Подобрали 400 специалистов в сфере промышленной автоматизации за месяц </p> </div> </div> <div class=\"section__cards-item section__cards-item_schneider\"> <ul class=\"card__tags\"> <li class=\"card__tag card__tag-orange\">Schneider Electric</li> </ul> <div class=\"card__content\"> <p class=\"card__text\"> Подобрали 400 специалистов в сфере промышленной автоматизации за месяц </p> </div> </div> <div class=\"section__cards-item section__cards-item_schneider\"> <ul class=\"card__tags\"> <li class=\"card__tag card__tag-green\">Schneider Electric</li> </ul> <div class=\"card__content\"> <p class=\"card__text\"> Подобрали 400 специалистов в сфере промышленной автоматизации за месяц </p> </div> </div> </div> <button class=\"services__btn services__btn-gray\">Показать все услуги</button> </div> </div> </section> <section class=\"services services-bg_purple\"> <div class=\"container\"> <div class=\"services__inner\"> <h2 class=\"services__title services__title-white\" id=\"media\">Медиа</h2> <div class=\"services__filter\"> <span class=\"filter__item active\">Последние материалы</span> <span class=\"filter__item\">Статьи</span> <span class=\"filter__item\">Гайды</span> <span class=\"filter__item\">Новости</span> </div> <div class=\"section__cards\"> <div class=\"section__cards-item section__cards-item_schneider\"> <ul class=\"card__tags\"> <li class=\"card__tag card__tag-purple\">Статьи</li> </ul> <div class=\"card__content\"> <span class=\"card__date\">21 сентября</span> <p class=\"card__text\"> Подобрали 400 специалистов в сфере промышленной автоматизации за месяц </p> </div> </div> <div class=\"section__cards-item section__cards-item_schneider\"> <ul class=\"card__tags\"> <li class=\"card__tag card__tag-purple\">Гайды</li> </ul> <div class=\"card__content\"> <span class=\"card__date\">21 сентября</span> <p class=\"card__text\"> Подобрали 400 специалистов в сфере промышленной автоматизации за месяц </p> </div> </div> <div class=\"section__cards-item section__cards-item_schneider\"> <ul class=\"card__tags\"> <li class=\"card__tag card__tag-purple\">Новости</li> </ul> <div class=\"card__content\"> <span class=\"card__date\">21 сентября</span> <p class=\"card__text\"> Подобрали 400 специалистов в сфере промышленной автоматизации за месяц </p> </div> </div> </div> <button class=\"services__btn services__btn-purple\">Показать все услуги</button> </div> </div> </section> <section class=\"success\" id=\"success\"> <div class=\"container\"> <div class=\"succsess__descr\"> <div class=\"section__title\"> <div class=\"title__wrapper\"> <span class=\"accent-color accent-color_light-green\">// </span> <h2 class=\"title title-success\">Всё получится:</h2> <div class=\"title__accent-wrapper title__accent-wrapper-success\"> <span class=\"title__accent\">новая профессия и новая жизнь</span> </div> <p class=\"title__text title__text-success\">С вами всегда наставники, ревьюеры и такие же как вы студенты. Реальные проекты и целая платформа с упражнениями помимо теории. Практикум помогает прийти к цели быстрее. Главное — идти!</p> </div> </div> <div class=\"success-btn__wrapper\"> <button type=\"submit\" class=\"nav__btn nav__btn-project\">Обсудить проект</button> <button type=\"submit\" class=\"nav__btn nav__btn-resume success__btn\">Отправить резюме</button> </div> </div> </div> </section> <section class=\"consultation\" id=\"consultation\"> <div class=\"container\"> <div class=\"consultation__inner\"> <div class=\"consultation__descr\"> <h1 class=\"consultation__title\">Консультация специалиста</h1> <p class=\"consultation__text\">Напишите нам, позвоните или оставьте заявку. Выбирайте наиболее удобный для вас способ коммуникации!</p> <div class=\"consultation__social\"> <div class=\"consultation__item\"> <a href=\"https://t.me\" class=\"consultation__link social-tg\" target=\"_blank\">Telegram</a> </div> <div class=\"consultation__item\"> <a href=\"https://wa.me\" class=\"consultation__link social-what\" target=\"_blank\">Whatsapp</a> </div> <div class=\"consultation__item\"> <a href=\"https://vk.com\" class=\"consultation__link social-vk\" target=\"_blank\">Вконтакте</a> </div> <div class=\"consultation__item\"> <a href=\"mailto:\" class=\"consultation__link social-mail\" target=\"_blank\">Почта</a> </div> </div> </div> <div class=\"consultation__form\"> <form class=\"form\" action=\"/submit_form\" method=\"POST\"> <h2 class=\"form__title\">Оставьте заявку</h2> <input class=\"form__name\" type=\"text\" id=\"name\" name=\"name\" placeholder=\"Имя\" required> <input class=\"form__tel\" type=\"tel\" id=\"phone\" name=\"phone\" placeholder=\"Телефон\" required> <input class=\"form__email\" type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email\" required> <p class=\"form__descr\"> <span class=\"form__accent-color\">//</span> Нажимая на кнопку «Отправить данные», вы даете согласие на обработку персональный данных </p> <button class=\"form__submit\" type=\"submit\">Отправить данные</button> </form> </div> </div> </div> </section> </main> <footer class=\"footer\"> <div class=\"container\"> <div class=\"footer__inner\"> <div class=\"footer__contacts\"> <div class=\"footer__logo-box\"> <div class=\"footer__img-box\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"footer logo\" class=\"footer__logo\"> </div> <div class=\"footer__img-box\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"footer logo\" class=\"footer__logo\"> </div> </div> <div class=\"footer__logo-wrapper\"> <div class=\"footer__logo-contacts\"> <span class=\"footer__info-title\">Москва</span> <a href=\"geo:55.735437,37.604312?q=4й Добрынинский переулок, дом 8, офис С03-01\" class=\"footer__info footer__info-adress\">4й Добрынинский переулок, дом 8, офис С03-01</a> </div> <div class=\"footer__logo-contacts\"> <a href=\"mailto:Contact@SwiftTechnical.ru\" class=\"footer__info footer__info-mail\">Contact@SwiftTechnical.ru</a> <a href=\"tel:+7(495)663-65-00\" class=\"footer__info-tel\" id=\"contacts\"> +7 (495) 663-65-00</a> </div> <div class=\"footer__logo-contacts mobile-desktop\"> <span class=\"footer__info\" id=\"work\">HR-отдел</span> <a href=\"#\" class=\"footer__info-title\">Rabota@SwiftTechnical.ru</a> </div> <div class=\"footer__logo-contacts mobile-desktop\"> <div class=\"footer__social\"> <a target=\"_blank\" href=\"https://t.me\" class=\"footer__link ft-tg\"> </a> <a target=\"_blank\" href=\"https://m.dzen.ru\" class=\"footer__link ft-lk\"></a> <a target=\"_blank\" href=\"https://vk.com\" class=\"footer__link ft-vk\"></a> <a target=\"_blank\" href=\"https://www.tiktok.com/@linkedin\" class=\"footer__link ft-in\"></a> <a target=\"_blank\" href=\"https://spb.hh.ru\" class=\"footer__link ft-hh\"></a> </div> </div> </div> </div> <hr class=\"footer__line\"> <div class=\"footer__about\"> <div class=\"footer__about-item\"> <div class=\"footer__title-wrapper footer__info-title\"> Swift Technical <span class=\"footer__title-arrow\" data-target=\"footer-1\"></span> </div> <div class=\"footer__about-lists\" id=\"footer-1\"> <a href=\"#consultation\" class=\"footer__info\">Подбор персонала</a> <a href=\"#consultation\" class=\"footer__info\">Временный персонал</a> <a href=\"#consultation\" class=\"footer__info\">Консультационные услуги</a> <a href=\"#consultation\" class=\"footer__info\">Подбор персонала</a> <a href=\"#consultation\" class=\"footer__info\">Временный персонал</a> <a href=\"#consultation\" class=\"footer__info\">Консультационные услуги</a> </div> </div> <div class=\"footer__about-item\"> <div class=\"footer__title-wrapper footer__info-title\"> Nordcore <span class=\"footer__title-arrow\" data-target=\"footer-2\"></span> </div> <div class=\"footer__about-lists\" id=\"footer-2\"> <a href=\"#consultation\" class=\"footer__info\">Обучение и оценка</a> <a href=\"#consultation\" class=\"footer__info\">Консультационные услуги</a> <a href=\"#consultation\" class=\"footer__info\">Обучение и оценка</a> <a href=\"#consultation\" class=\"footer__info\">Консультационные услуги</a> <a href=\"#consultation\" class=\"footer__info\">Обучение и оценка</a> <a href=\"#consultation\" class=\"footer__info\">Консультационные услуги</a> </div> </div> <div class=\"footer__about-item mobile-desktop\"> <a href=\"#cases\" class=\"footer__info-title\">Кейсы</a> </div> <div class=\"footer__about-item\"> <div class=\"footer__about-item laptop-desktop\"> <a href=\"#cases\" class=\"footer__title-wrapper footer__info-title\">Кейсы</a> </div> <div class=\"footer__title-wrapper footer__info-title\"> Медиа <span class=\"footer__title-arrow\" data-target=\"footer-3\"></span> </div> <div class=\"footer__about-lists\" id=\"footer-3\"> <a href=\"#media\" class=\"footer__info\">Статьи</a> <a href=\"#media\" class=\"footer__info\">Гайды</a> <a href=\"#media\" class=\"footer__info\">Новости</a> <a href=\"#media\" class=\"footer__info\">Мероприятия</a> </div> </div> <div class=\"footer__about-item laptop-desktop\"> <a href=\"#\" class=\"footer__info-title\">О холдинге</a> <a href=\"#work\" class=\"footer__info-title\">Вакансии</a> <a href=\"#contacts\" class=\"footer__info-title\">Контакты</a> </div> <div class=\"footer__about-item mobile-desktop\"> <a href=\"#cases\" class=\"footer__info-title\">О холдинге</a> </div> <div class=\"footer__about-item mobile-desktop\"> <a href=\"#cases\" class=\"footer__info-title\">Вакансии</a> </div> <div class=\"footer__about-item mobile-desktop\"> <a href=\"#cases\" class=\"footer__info-title\">Контакты</a> </div> <div class=\"footer__about-item laptop-desktop\"> <span class=\"footer__info\" id=\"work\">Почта для резюме</span> <a href=\"#\" class=\"footer__info-title\">Rabota@SwiftTechnical.ru</a> <div class=\"footer__social\"> <a target=\"_blank\" href=\"https://t.me\" class=\"footer__link ft-tg\"> </a> <a target=\"_blank\" href=\"https://m.dzen.ru\" class=\"footer__link ft-lk\"></a> <a target=\"_blank\" href=\"https://vk.com\" class=\"footer__link ft-vk\"></a> <a target=\"_blank\" href=\"https://www.tiktok.com/@linkedin\" class=\"footer__link ft-in\"></a> <a target=\"_blank\" href=\"https://spb.hh.ru\" class=\"footer__link ft-hh\"></a> </div> </div> </div> <hr class=\"footer__line\"> <div class=\"footer__copy-right\"> <div class=\"copy-right__item\"> <span class=\"copy-right__info\">Политика конфиденциальности</span> <span class=\"copy-right__info\">Макет для проекта Сделан в CULT</span> </div> <div class=\"copy-right__item\"> <span class=\"copy-right__info\">Этот веб-ресурс создан в рамках тестового задания для потенциального работодателя. Фронтенд частю проекта занимался я, <span class=\"copy-right_accent\">Мамедов Шухрат</span> , с целью продемонстрировать мои навыки и знания в области веб-разработки. Сайт предназначен для ознакомления работодателя с моими способностями и подходом к созданию веб-приложений.</span> </div> </div> </div> </div> </footer> </body> </html>";
// Exports
/* harmony default export */ const src = ((/* unused pure expression or super */ null && (code)));
// EXTERNAL MODULE: ./src/js/main.js
var main = __webpack_require__(852);
;// CONCATENATED MODULE: ./src/index.js




})();

/******/ })()
;