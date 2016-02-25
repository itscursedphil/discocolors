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

  rgbContainer.innerHTML = 'RGB: ' + red + ', ' + blue + ', ' + green;
  hexContainer.innerHTML = 'Hex: ' + rgbToHex(red, blue, green);

  document.getElementsByTagName('head')[0].removeChild(document.getElementsByTagName('style')[0]);
  var style = document.createElement('style');
  var color = 'body { background-color: ' + rgbToHex(red, blue, green) + ' } #button:hover { color: ' + rgbToHex(red, blue, green) + ' };';
  style.appendChild(document.createTextNode(color));
  document.getElementsByTagName('head')[0].appendChild(style);
};

button.addEventListener('click', draw);

discoButton.addEventListener('click', function(){
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
