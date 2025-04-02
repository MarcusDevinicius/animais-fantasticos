import ScrollSuave from "./modules/srcoll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import initTolltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchanimais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]'); //COm isso qualque pesssoa poderá importar essa classe com esse método de scroll suave para seu site.
scrollsuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabnav.init();

const modal = new Modal(
  'a[href^="login"]',
  '[data-modal="fechar"]',
  ".modal-container"
);
modal.init();

initTolltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

// import $ from 'jquery';
// import _ from 'lodash';
// $('nav').hide();
