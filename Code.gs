function onInstall() {
  onOpen();
}

function onOpen() {
  DocumentApp.getUi().createAddonMenu().addItem("Open App", "showSidebar").addToUi();
}

function showSidebar() {
  var html = HtmlService.createTemplateFromFile("sidebar").evaluate().setTitle("Synesthetizer");
  DocumentApp.getUi().showSidebar(html);
}

function setColor(letter, hexcode) {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(letter, hexcode);
}

function colorText() {
  const userProperties = PropertiesService.getUserProperties();
  var colors = userProperties.getProperties();
  var text = DocumentApp.getActiveDocument().getBody().editAsText();
  
  for (var i = 0; i < text.getText().length; i++) {
    var character = text.getText()[i]; 
    if (isLetter(character)) {
      character = character.toLowerCase();
      text.setForegroundColor(i, i, colors[character]);
    } else {
      text.setForegroundColor(i, i, '#000000');
    }
  }
}

function isLetter(character) {
  return character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z';
}

function lightenColor(color) {
  var r = parseInt(color.substring(1, 3), 16);
  var g = parseInt(color.substring(3, 5), 16);
  var b = parseInt(color.substring(5, 7), 16);

  var factor = .4;
  r += (255-r)*(factor);
  g += (255-g)*(factor);
  b += (255-b)*(factor);

  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);

  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(value) {
  var hex = value.toString(16);
  if (hex.length == 1) {
    return "0"+hex;
  }
  return hex;
}

function colorTextByWords() {
  const userProperties = PropertiesService.getUserProperties();
  var colors = userProperties.getProperties();
  var text = DocumentApp.getActiveDocument().getBody().editAsText();

  for (var i = 0; i < text.getText().length; i++) {
    var character = text.getText()[i]; 
    if (isLetter(character)) {
      character = character.toLowerCase();
      color = colors[character];
      var j = i;
      while(j < text.getText().length && (isLetter(text.getText()[j]) || text.getText()[j] == "'" || text.getText()[j] == "-")) {
        j++;
      }
      j--;
      text.setForegroundColor(i, i, color);
      if (j > i) {
        text.setForegroundColor(i+1, j, lightenColor(color));
      }
      i = j+1;
    } else {
      text.setForegroundColor(i, i, '#000000');
    }
  }
}

function getColor(letter) {
  const userProperties = PropertiesService.getUserProperties();
  var hexcode = userProperties.getProperty(letter);
  if (hexcode !== null) {
    return hexcode;
  } else {
    return '#000000';
  }
}
