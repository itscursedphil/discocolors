var button = document.getElementById('button');
var rgbContainer = document.getElementById('rgb');
var hexContainer = document.getElementById('hex');
var discoButton = document.getElementById('toggleDisco');
var disco = false;
var makeDisco;
var fps = 5;

var colorToHex = function(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

var rgbToHex = function(r, g, b){
    return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
};

var draw = function(){
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var hex = rgbToHex(red, blue, green);

  rgbContainer.innerHTML = 'RGB: ' + red + ', ' + blue + ', ' + green;
  hexContainer.innerHTML = 'Hex: ' + hex;

  document.getElementsByTagName('head')[0].removeChild(document.getElementsByTagName('style')[0]);
  var style = document.createElement('style');
  var css = 'body { background-color: ' + hex + '; } a:link, a:active, a:visited { color: ' + hex + '; } #button:hover { color: ' + hex + '; };';
  style.appendChild(document.createTextNode(css));
  document.getElementsByTagName('head')[0].appendChild(style);
};

button.addEventListener('click', draw);

discoButton.addEventListener('click', function(e){
  e.preventDefault();
  if(!disco){
    disco = !disco;
    makeDisco = setInterval(function(){
       draw();
    }, 1000/fps);
    this.innerHTML = 'Stop the rave!';
  } else {
    disco = !disco;
    clearInterval(makeDisco);
    this.innerHTML = 'Disco!';
  }
});

draw();
