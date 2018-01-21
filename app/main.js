// yarn add -E material-design-icons
// import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import './style.css';

// 3:
import $ from 'jquery';
// const $ = window.jQuery = window.$ = require("jquery");
import 'hammerjs/hammer.js';
import 'materialize-css/dist/js/materialize.js';

$('select').material_select();
$(".button-collapse").sideNav();
$('button.waves-effect').click(() => {
  $('#message').hide().text('Hello!').show(1000);
});
