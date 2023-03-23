
var timer = (Math.random()*10000+25000);
var currentMillis = 0;
var sound;

function preload(){
  sound = loadSound('audio/C U Soon.mp3')
}
function setup() {
//background color of divs
sound.play();
sound.loop();
for (e of document.getElementsByClassName("random")) {
  //boolean variable for gradient or block
  var boolean = Math.round(Math.random());
  if (boolean > .5) {
    //generates a random solid rgb background color
    var colorBlock = Math.floor(Math.random()*255)
    var c = "rgb(" + colorBlock
    + "," + colorBlock
    + "," + colorBlock + ")"
    e.style.setProperty('background-color',c);
  } else {
    //generates a random gradient
    var colorBlock1 = Math.floor(Math.random()*255)
    var c1 = "rgb(" + colorBlock1
    + "," + colorBlock1
    + "," + colorBlock1 + ")"
    e.style.setProperty('background-color',c1);
    var colorBlock2 = Math.floor(Math.random()*255)
    var c2 = "rgb(" + colorBlock2
    + "," + colorBlock2
    + "," + colorBlock2 + ")"
    var gradient = c1 + c2
    e.style.removeProperty('background-color');
    e.style.setProperty('background-image', gradient);
  }
}
//end background color of divs

//color of text
for (e of document.getElementsByClassName('random')) {
  var boolean = Math.round(Math.random());
  if (boolean > .5) {
    var textColor = "rgb(0,0,0)"
  }else{
var textColor = "rgb(255,255,255)"
  }
  e.style.setProperty('color', textColor);
}
//end color text

//Display, block or flex
for (e of document.getElementsByClassName('random')) {
  var boolean = Math.round(Math.random());
  if (boolean > .5) {
    var displayMode = "block"
  }else{
var displayMode = "flex"
  }
  e.style.setProperty('display', displayMode);
}
//end color text

//mess up margins
for (e of document.getElementsByClassName("random")) {
  margins = Math.round(Math.random() * 150 - 50);
  margins = margins + "px"
  padding = Math.round(Math.random() * 150 - 50);
  padding = padding + "px"
  width = Math.round(Math.random() * 500+ 100);
  width = width + "px"
  height = Math.round(Math.random() * 500 + 50);
  height = height + "px"
  e.style.setProperty('margin', margins);
  e.style.setProperty('padding', padding);
  e.style.setProperty('width', width);
  e.style.setProperty('height', height);
}
//end margins

//text randomizer
for (e of document.getElementsByClassName("randomText")) {
  var boolean = Math.random();
  if(boolean < .2){
    //text option 1
    var newText = "I will not forget the moment I am inhabiting";
  }else if(boolean > .1 && boolean < .2){
    //text option 2
    var newText = "I've forgotten the sound of your voice again, will you speak to me?";
  }else if(boolean > .2 && boolean < .3){
    //text option 3
    var newText = "I've forgotten your face, will you show yourself?";
  }else if(boolean > .3 && boolean < .4){
    //text option 4
    var newText = "My memories are fading";
  }else if(boolean > .4 && boolean < .5){
    //text option 5
    var newText = "Forgetfulness can be a blessing";
  } else if(boolean > .5 && boolean < .6){
    //text option 6
    var newText = "I remember, I remember, I remember, I remember.";
  }else if(boolean > .6 && boolean < .7){
    //text option 7
    var newText = "Have you been here before? I don't recognize you";
  }else if(boolean > .7 && boolean < .8){
    //text option 8
    var newText = "Welcome to the repository of forgotten memories";
  }else if(boolean > .8 && boolean < .9){
    //text option 9
    var newText = "Please don't forget me.";
  } else if (boolean >.9){
    //text option 10
    var newText = "I have past, I have present, I have future"
  }
e.innerHTML = newText;
}
//end text randomizer

//text size randomizer
for (e of document.getElementsByClassName("randomText")) {
  var boolean = Math.random()*40 + 10;
  var newTextSize = (boolean + "px")
e.style.setProperty('font-size', newTextSize);
}
//end text size randomizer

//text Display, block or flex
for (e of document.getElementsByClassName('randomText')) {
  var boolean = Math.round(Math.random());
  if (boolean > .5) {
    var displayMode = "block"
  }else{
var displayMode = "flex"
  }
  e.style.setProperty('display', displayMode);
}
// end text Display, block or flex
console.log(timer);
}

function draw(){
if(millis() > (currentMillis + timer)){
currentMillis = millis();
console.log("pulse")
console.log(currentMillis)
  //randomize text
  for (e of document.getElementsByClassName("randomText")) {
    var boolean = Math.random();
    if(boolean < .2){
      //text option 1
      var newText = "I will not forget the moment I am inhabiting";
    }else if(boolean > .1 && boolean < .2){
      //text option 2
      var newText = "I've forgotten the sound of your voice again, will you speak to me?";
    }else if(boolean > .2 && boolean < .3){
      //text option 3
      var newText = "I've forgotten your face, will you show yourself?";
    }else if(boolean > .3 && boolean < .4){
      //text option 4
      var newText = "My memories have been taken, just as they were given";
    }else if(boolean > .4 && boolean < .5){
      //text option 5
      var newText = "Forgetfulness can be a blessing";
    } else if(boolean > .5 && boolean < .6){
      //text option 6
      var newText = "I remember, I remember, I remember, I remember.";
    }else if(boolean > .6 && boolean < .7){
      //text option 7
      var newText = "Have you been here before? I don't recognize you";
    }else if(boolean > .7 && boolean < .8){
      //text option 8
      var newText = "Welcome to the repository of forgotten memories";
    }else if(boolean > .8 && boolean < .9){
      //text option 9
      var newText = "Please don't forget me.";
    } else if (boolean >.9){
      //text option 10
      var newText = "I have past, I have present, I have future"
    }
  e.innerHTML = newText;
  }
}
if(millis() > (currentMillis + (timer*2))){
  currentMillis = millis();
  console.log("pulse")
  console.log(currentMillis)
    //background color of divs
for (e of document.getElementsByClassName("random")) {
  //boolean variable for gradient or block
  var boolean = Math.round(Math.random());
  if (boolean > .5) {
    //generates a random solid rgb background color
    var colorBlock = Math.floor(Math.random()*255)
    var c = "rgb(" + colorBlock
    + "," + colorBlock
    + "," + colorBlock + ")"
    e.style.setProperty('background-color',c);
  } else {
    //generates a random gradient
    var colorBlock1 = Math.floor(Math.random()*255)
    var c1 = "rgb(" + colorBlock1
    + "," + colorBlock1
    + "," + colorBlock1 + ")"
    e.style.setProperty('background-color',c1);
    var colorBlock2 = Math.floor(Math.random()*255)
    var c2 = "rgb(" + colorBlock2
    + "," + colorBlock2
    + "," + colorBlock2 + ")"
    var gradient = c1 + c2
    e.style.removeProperty('background-color');
    e.style.setProperty('background-image', gradient);
  }
}
//end background color of divs

//Display, block or flex
for (e of document.getElementsByClassName('random')) {
  var boolean = Math.round(Math.random());
  if (boolean > .5) {
    var displayMode = "block"
  }else{
var displayMode = "flex"
  }
  e.style.setProperty('display', displayMode);
}
//end Display, block or flex

//mess up margins
for (e of document.getElementsByClassName("random")) {
  margins = Math.round(Math.random() * 150 - 50);
  margins = margins + "px"
  padding = Math.round(Math.random() * 150 - 50);
  padding = padding + "px"
  width = Math.round(Math.random() * 500+ 100);
  width = width + "px"
  height = Math.round(Math.random() * 500 + 50);
  height = height + "px"
  e.style.setProperty('margin', margins);
  e.style.setProperty('padding', padding);
  e.style.setProperty('width', width);
  e.style.setProperty('height', height);
}
//end margins

    }
  }