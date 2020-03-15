/* Preloader */
window.onload = function(){
  var el = document.getElementById('preload');
  el.style.display = 'none';
};
/* Smooth Scroll */
var scroll = new SmoothScroll('a[href*="#"]');
/* Progress Bar */
window.onscroll = function() {elMatador()};
function elMatador() {
  var x = document.body.scrollTop || document.documentElement.scrollTop;
  var y = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var result = (x / y) * 100;
  document.getElementById("progressBar").style.width = result + "%";
}