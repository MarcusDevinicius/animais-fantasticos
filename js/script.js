import ScrollSuave from "./modules/srcoll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetchanimais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollAnima from "./modules/scrollAnima.js";


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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]", ["touchstart", "click"]);
dropdownMenu.init();

const menumobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menumobile.init();

const funcionamento = new Funcionamento("[data-semana]", 'aberto');
funcionamento.init();


fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoin('https://blockchain.info/ticker', ".btc-preco");

// import $ from 'jquery';
// import _ from 'lodash';
// $('nav').hide();
