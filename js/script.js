import ScrollSuave from "./modules/srcoll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetchanimais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
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

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();


initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimacaoScroll();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

// import $ from 'jquery';
// import _ from 'lodash';
// $('nav').hide();
