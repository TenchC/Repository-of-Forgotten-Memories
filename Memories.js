
var timer = (Math.random()*3000+3000);
var timerBlocks = (Math.random()*6000+6000);
var currentMillis = 0;
var currentMillisBlocks = 0;
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
for (e of document.getElementsByClassName('randomText')) {
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
//end Display, block or flex



//mess up margins & Location
for (e of document.getElementsByClassName("random")) {
  margins = Math.round(Math.random() * 50 );
  margins = margins + "px"
  padding = Math.round(Math.random() * 50);
  padding = padding + "px"
  width = Math.round(Math.random() * 500+ 100);
  width = width + "px"
  height = Math.round(Math.random() * 500 + 50);
  height = height + "px"
  e.style.setProperty('margin', margins);
  e.style.setProperty('padding', padding);
  e.style.setProperty('width', width);
  e.style.setProperty('height', height);
  top = Math.round(Math.random() * 3000);
  top = top + "px"
  bottom = Math.round(Math.random() * 3000);
  bottom = bottom + "px"
  left = Math.round(Math.random() * 1000);
  left = left + "px"
  right = Math.round(Math.random() * 1000);
  right = right + "px"
  e.style.setProperty('top', top);
  e.style.setProperty('bottom', bottom);
  e.style.setProperty('left', left);
  e.style.setProperty('right', right);
}
//end margins & Location

//text randomizer
for (e of document.getElementsByClassName("randomText_index")) {
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
  for (e of document.getElementsByClassName("randomText_00")) {
    var trigger = Math.random();
    if(trigger < .2){
    var boolean = (Math.random()*1);
    if(boolean < .2){
      //text option 1
      var newText = "I wish I had told you that night";
    }else if(boolean > .1 && boolean < .2){
      //text option 2
      var newText = "Why couldn't you face it?";
    }else if(boolean > .2 && boolean < .3){
      //text option 3
      var newText = "Part of me resents you for it";
    }else if(boolean > .3 && boolean < .4){
      //text option 4
      var newText = "You were the first person I told";
    }else if(boolean > .4 && boolean < .5){
      //text option 5
      var newText = "Do you still live in New York?";
    } else if(boolean > .5 && boolean < .6){
      //text option 6
      var newText = "I still think of you sometimes";
    }else if(boolean > .6 && boolean < .7){
      //text option 7
      var newText = "Do you remember listening to the bee gees on the roof?";
    }else if(boolean > .7 && boolean < .8){
      //text option 8
      var newText = "And pride on third Avenue";
    }else if(boolean > .8 && boolean < .9){
      //text option 9
      var newText = "Please don't forget me";
    } else if (boolean >.9 && boolean < 1){
      //text option 10
      var newText = "Dead but delicious"
    }
  e.innerHTML = newText;
  }
  }
  for (e of document.getElementsByClassName("randomText_01")) {
    var trigger = Math.random();
    if(trigger < .2){
    var boolean = (Math.random()*1);
    if(boolean < .2){
      //text option 1
      var newText = "Off you went back across the pond";
    }else if(boolean > .1 && boolean < .2){
      //text option 2
      var newText = "Let's keep in touch ok?";
    }else if(boolean > .2 && boolean < .3){
      //text option 3
      var newText = "You really made me glow";
    }else if(boolean > .3 && boolean < .4){
      //text option 4
      var newText = "Alive in a fool's paradise";
    }else if(boolean > .4 && boolean < .5){
      //text option 5
      var newText = "With your checkerboard head";
    } else if(boolean > .5 && boolean < .6){
      //text option 6
      var newText = "happily bruised and bloodied";
    }else if(boolean > .6 && boolean < .7){
      //text option 7
      var newText = "I ended up moving in with them";
    }else if(boolean > .7 && boolean < .8){
      //text option 8
      var newText = "And I still don't fuck with Travis";
    }else if(boolean > .8 && boolean < .9){
      //text option 9
      var newText = "Please don't forget me";
    } else if (boolean >.9 && boolean < 1){
      //text option 10
      var newText = "Stay wild child"
    }
  e.innerHTML = newText;
  }
  }
  for (e of document.getElementsByClassName("randomText_02")) {
    var trigger = Math.random();
    if(trigger < .2){
    var boolean = (Math.random()*1);
    if(boolean < .2){
      //text option 1
      var newText = "Off you went back across the pond";
    }else if(boolean > .1 && boolean < .2){
      //text option 2
      var newText = "Are you candy flipping in the woods?";
    }else if(boolean > .2 && boolean < .3){
      //text option 3
      var newText = "Remember the flag room?";
    }else if(boolean > .3 && boolean < .4){
      //text option 4
      var newText = "And the nightmare in the airport";
    }else if(boolean > .4 && boolean < .5){
      //text option 5
      var newText = "When I fainted at Lea's show";
    } else if(boolean > .5 && boolean < .6){
      //text option 6
      var newText = "And you cried in my arms";
    }else if(boolean > .6 && boolean < .7){
      //text option 7
      var newText = "With coffee and a bagel every morning";
    }else if(boolean > .7 && boolean < .8){
      //text option 8
      var newText = "And reading by candle light at night";
    }else if(boolean > .8 && boolean < .9){
      //text option 9
      var newText = "Sometimes I still see Derin";
    } else if (boolean >.9 && boolean < 1){
      //text option 10
      var newText = "We were both just kids back then"
    }
  e.innerHTML = newText;
  }
  }
  for (e of document.getElementsByClassName("randomText_03")) {
    var trigger = Math.random();
    if(trigger < .2){
    var boolean = (Math.random()*1);
    if(boolean < .2){
      //text option 1
      var newText = "I still laugh about the Gettle";
    }else if(boolean > .1 && boolean < .2){
      //text option 2
      var newText = "The way you ride a bike";
    }else if(boolean > .2 && boolean < .3){
      //text option 3
      var newText = "Why were you obsessed with debate bros";
    }else if(boolean > .3 && boolean < .4){
      //text option 4
      var newText = "and I get it you listen to weird music";
    }else if(boolean > .4 && boolean < .5){
      //text option 5
      var newText = "with coronas on the beach";
    } else if(boolean > .5 && boolean < .6){
      //text option 6
      var newText = "I wonder if you're still in Uncommon";
    }else if(boolean > .6 && boolean < .7){
      //text option 7
      var newText = "Have you left entirely";
    }else if(boolean > .7 && boolean < .8){
      //text option 8
      var newText = "It's been a long time now";
    }else if(boolean > .8 && boolean < .9){
      //text option 9
      var newText = "Thanks for visiting for a little while";
    } else if (boolean >.9 && boolean < 1){
      //text option 10
      var newText = "If you called me now, I don't think I'd answer"
    }
  e.innerHTML = newText;
  }
  }
  for (e of document.getElementsByClassName("randomText_04")) {
    var trigger = Math.random();
    if(trigger < .2){
    var boolean = (Math.random()*1);
    if(boolean < .2){
      //text option 1
      var newText = "I'm still here, even if you aren't";
    }else if(boolean > .1 && boolean < .2){
      //text option 2
      var newText = "Camping out in the reservoir";
    }else if(boolean > .2 && boolean < .3){
      //text option 3
      var newText = "I think I've forgotten what kind of person you were";
    }else if(boolean > .3 && boolean < .4){
      //text option 4
      var newText = "Are you in college now or somewhere else?";
    }else if(boolean > .4 && boolean < .5){
      //text option 5
      var newText = "Are you still making music?";
    } else if(boolean > .5 && boolean < .6){
      //text option 6
      var newText = "Can you finally do a kickflip?";
    }else if(boolean > .6 && boolean < .7){
      //text option 7
      var newText = "Are you still talking to Ella?";
    }else if(boolean > .7 && boolean < .8){
      //text option 8
      var newText = "Why did I believe you for so long";
    }else if(boolean > .8 && boolean < .9){
      //text option 9
      var newText = "Going to every park in upstate";
    } else if (boolean >.9 && boolean < 1){
      //text option 10
      var newText = "We were both just kids back then"
    }
  e.innerHTML = newText;
  }
  }
  for (e of document.getElementsByClassName("randomText_05")) {
    var trigger = Math.random();
    if(trigger < .2){
    var boolean = (Math.random()*1);
    if(boolean < .2){
      //text option 1
      var newText = "Off you went back across the pond";
    }else if(boolean > .1 && boolean < .2){
      //text option 2
      var newText = "Are you candy flipping in the woods?";
    }else if(boolean > .2 && boolean < .3){
      //text option 3
      var newText = "Remember the flag room?";
    }else if(boolean > .3 && boolean < .4){
      //text option 4
      var newText = "And the nightmare in the airport";
    }else if(boolean > .4 && boolean < .5){
      //text option 5
      var newText = "When I fainted at Lea's show";
    } else if(boolean > .5 && boolean < .6){
      //text option 6
      var newText = "And you cried in my arms";
    }else if(boolean > .6 && boolean < .7){
      //text option 7
      var newText = "With coffee and a bagel every morning";
    }else if(boolean > .7 && boolean < .8){
      //text option 8
      var newText = "And reading by candle light at night";
    }else if(boolean > .8 && boolean < .9){
      //text option 9
      var newText = "Sometimes I still see Derin";
    } else if (boolean >.9 && boolean < 1){
      //text option 10
      var newText = "We were both just kids back then"
    }
  e.innerHTML = newText;
  }
  }
  for (e of document.getElementsByClassName("randomText_index")) {
    var boolean = (Math.random()*1.3);
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
      var newText = "My memories have been taken";
    }else if(boolean > .4 && boolean < .5){
      //text option 5
      var newText = "Forgetfulness can be a ß̶͙̚ḽ̵̿ê̴͋͜§̸͈͑§̷͕͝ï̷̬̅ñ̶̫̉g̷̬͗";
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
    } else if (boolean >.9 && boolean < 1){
      //text option 10
      var newText = "I have past, I have present, I have future"
    }  else if (boolean > 1 && boolean < 1.1){
      //text option 10
      var newText = "ꟻ̷̨̡̢̨̣͖̮͉̪̝̬̲̲̟̐́̐͛̓̍̏̽̌̓̓͑̓͌̑̃́̍̀͊͂͒̂̈́̾̀͘͘̚̚͝͝͠͝͝ǫ̵̛̺̞͍̯̗̝̹̳̼͎̺̹̋̇̽̓̈́̒͛̉̆͒̓̈́͐̿̀̈̃̓͑́͛͆̈̌͊̃̒͒͂̑̈͘͝͝͝͝ͅɿ̸̨̛̹̪̲͖̞̙͍̼͔͙͐͌͋̓̊̃̔̾̇͂̔̇̎͂̌́̓̈́̐̃̌͂̆̈́͌̆̀͊̚̚͘͠͝͝Ɉ̷̡̨̧̧̻̪̮̜͍͖̘̯̩̘͕̫̺͔͕̝͚̘͈̘̼͈̯͎̳̯͇͖͖͎̱̙̓̊͌͆͂͂́̓̈̍̊̔̽̒͌̊̒̍͆́͘̕͠͝ͅ ̴̧̧̢̡͈̫͍̥̜̞̞̲̥͇̗͓͎͉̜̺̯̻͛͊̀̀̇͑͊́̀͂̀̅̊͋͑̔̒̅̅͗̏͊̀̎̆͒͌̇̀̽͛̽̀́̾͒̚̕͜͜͝ͅḿ̸̡̨̧̩̼̻̤̪̜̣̱̹̬̮̗̺͍͖̗̳͉͕̙̘͎͒̌̔̌͗̄̆̊̓̇̄͒̽̑̆̃̅̈́̍̏̎̈́̐̑͑̿̀̈́̈́̌͠͝ͅǝ̶̡̧̨̢̨͚͈̳̣͈̳̞̳̫͈̯͉̟͔̭͇̟̪̭̫̀̾̉̈̈̏̄́̈͑̓̐̃͌́̀͊̿͊͗̔͌̉̚̚͜͜͜͜ͅ ̷̡̢̧̯̯̠̗̗̰͈͓̠̣̯͙͔̞̖͙̬͖̟̻̤̳̞̹̝̘̤̺̼͇̳̌̃̔̌͋̓̋́̅̈́̐̃̉͗͗͗̋̓̒̑̅̆̊͛͘͘͝ͅņ̵̢̡̡̛̛̛̞̬̠͔̺͚̖͙͖̜̥̯̖͓͔̫̹̬̙̖̼̙̟̱̻͛̄̆̏̋̐́͐̂͂̌̃̐̂͋̃̓̉͑̉̀̈̿͌̕̚͜ͅǫ̴̡̢̢͚̞̯͔͔̭̩̙͎̯̻͙̰̬͕̱̬͕͔̥͙̖̮̟̯̣̺̻̙͕̖̖͛̓͌̋͌̈́̑͗͌́͂̌́̓͛̃̑̅́͊̓̀͛͂̇̓̀͆͑̓̅̊̃͘͘͜͠w̸̧͎͍̘̪͎̯̪͈̳̥͍͓̠̥͚̞̬̘͎̻̬̦͓̪̦͕͚̹͇̺̱̪̣̰̮͔͑̄͂͋͋̍̓̈́̽̒̂͑̏̍̈̋̈̆̋̈́̀͑͌̿͜͜͠͝͝"
    }  else if (boolean > 1.1 && boolean < 1.2){
      //text option 10
      var newText = "Ḩ̸̧̡̨̢͓͕̪̙̱̻̝̭͕̟̻̩͙̣͈͇̞͇̼̟͍̪͍̟͇͓̯͎̹̗͎̝̲̬̝̳͍̯͚̙͇͙̩̯̦̗͔̖̥̻̬̃̌̂̔̀̔́͋̇͊̌̄̆̀̑̋̈́͆̎̏́̈̾̏̓̃̈́͊̌͆̅̈́̾͑̉̈́̾̑͂̎̀̑̂̍̎͊͋̊͘̚̚̕͜͜͠͝͝ơ̶̢̨̧̛̩͙̩̥̲͔̼̠̰͈̙̖͓͇͎͓̗̲̙̯͇̠̭̝̠̘̮̠͒̌̐̒̓͌͗̾́̀̀̽̌̀̾̔͛̑̓̽̄̃̉̀̃̽͋̂̇͆̓̂̊̽̽̋̃̌̑͆̽̒̕͜ͅͅq̶̧̢̧̧̨̛̛̫͖̳̫̜̯͕̘͇̥̜̤̞̗͙̤̲͉̳̘̭̯͓̼̫̝͔̤̫͙̗̙̫͉̮̫̳̗͎͖̣̬͓̰̥̔̃̉̈́̀̆͒́͂̾̈́̌̈́͒̂̊͋̅̑̑̾̉̄̓̿̾͂́̅̇̇͒̉̓́̋̈́̃̆͗̈́̔͐̆͋̕̕͜͜͠͝͠͝͠ͅͅǝ̷̡̢̨̨̧̭̬͍̮͍̦̗̭̙̣̲̯̘̹̖̱͈͔̤̹̦̤̳̫̼̙̙͎͎̤̟͎̭̫͕̙͈̦͙̞̭͕̳̜̭̖̟͔̝̳̺̽̊̑̔͂̄̓̑̋̃̆̿̅̈́̍͗̌̔̔̀̑́͊͌̈́́͒͒̏̈́̾̋͒̔̃̐̒̒̐̓̐̒̕̚͘̕͜͠͝ ̵̡̡̨̡̢̛̛̪̝̮̭͔̥̪͎͉̲̳͔̙̣̠̰̺͈̗̫̼̘̭̲̞̠̪͎̫͚̬͚͖̟͚̿͗͗̓̎͋̂̀̾̈́̇͋̎͌̉̾̈́̀̀̊͌̑̒͐͂͗̄̕͘̚̚͜͜͜͜͝͝͝͝͝ʇ̵̢̧̫̤̳̟̞̻̝̩͎̠̯̻͕̝̮͙̻̝̞̘̞̟̙̤͈̤̼̑̆͐̐͋̂̈́͆̈́̆̄̔́̈́̾̽͒̂̂̉̈͊̉̏̃̍̔͐̉̌̈́̂͘̚̚͜͝͝͝͝͠ͅǒ̴̡̡̨̡̨̡̡̢̨̡͍̣̦̯͇̙̭̘̖̹̗͔͎͍̭͚͇͈̣̯̝̫̱͍̝̻͓͖͉͍̜̻̭͙̟͉̪̲̦̯̮͖̯̣̬͉̈́̔͌͊͌͗̑̋̋̃̀̌̉̇̍̑́͗͛̎̎̄̽̐͌͆̅̋͋̈́̿̌̂̂͂͊̈̍̅̉̐̏̉̂̚̕͘͘͜͝͠ͅɿ̶̢̧̡̢̛̠̘̘̱̫̼̪͇͖̟͈̳̜͓̙̹͓̬͓͙͛̊̏͌͒̇̆̈́͛͑̉̉̔͂̌͋̏̂̇̌̈̽̔̀̓͂̾̽̒̆̓͊͂̓̏̑̋́͆͘͜͠͝ ̸̘̯̰͎͇̤̹̭̝̠̥̻̜̯̹̣̜͉͖̩̺͍͎̭͙̠̻͍̻͚̼͉̘̼̿̅͋̂̎̒̉̒͗̀͆͂̇̏̇̋̒͛̑͆̀̃̀̀̾́̄̂͆̄̃̓̐̀̾̀̓͆͒͒̐̓̕̕̕͜͜͝͝ɒ̶̸̡̢̛̛̞̼͕͚͖͕̳̣̲͉̩͔̗̘̼̠̬̝͖͉̠͇̤̤̤̮̰̙͙͍̙̜̪͓̰̗̼̪͍͇̜̞̼̜͈̯͈̣̗͕͕̞̤͂̑̌̓͋͆͑̊͂̿̑́̑̍͌̉̈́̀̀͆̈́̾̅̀̒͆̋̽̄́́͒͐̀͛̔̓̿͋̔̈́͑̌̀̾͊͑͐̓̿͑͐̉̉̈͂͂̀͒̓̇̓̈͂̿̑͂̓͗̍́͛̚̕̚̚̕̚͘͜͜͜͜͝͝͝͝͝͝ͅņ̸̢̛̣̯͙̘̯̘͓͇̩̝̫͈͕͔̜̗̹̮̠̥̫̬̭̜͍̫̱͉̦̹̑̋́̍̑̒̑̀͐̒̃̈͒̋͒́̍̌͋̇̀̒͆̑̕̚͘̕͝͠͝ǝ̵̧̨̨̢̧̧̢̡̣̘̥̣͈͖͍̬̟͖̮̝͔͉̖̱̹͕̥̤͙̞̪̳͚̬͖̻͙̼͍͈͕̹̰͎̿̅͛͐͛͐̓̀͌̋͐̓͗͒͊̀̑͗̊͆͌̈́̈́̓̑̀̊̑̀̆̿͐̎̓̔͂̑̈́̈́̉̍͛͂͌͒̒̔͘̚͜͝͝͝ͅw̷̧̱̹̱̻͎̲͉̝͔͇͚̬͓̤̬̫͙̬̥̣̤̫̰͇͍̰͓̭̜͔̫̯̘̻͗͆̂͊̐͂͗͊̍͆́̈́̒̾̐͂̂̏͑̌̈́̆͌͊́͋͊̌̈́̒͊̌̈́̋̽͗͘̚͘̕͘͜͜ ̸̧̨̨̡̨̛̩̯͉̖̟̰͚̗͔̙͉̺̼̪̘̹̗̙̱̟̯͈͉̪̱̝̺͈͖̠̫̪̳̭̤͇̭̙̠̱̦̙͉̩͍̜̮̩̭̗͋̀̔́͛͊̈́̔̇̀̎͋̊̅̍̍͋̀̈͌̏͑͛̒̽̌̕͘̕͜͝͝ɔ̵̧̧̡̡̨̨̦̬̖̫̩̱̣̘̦͙͓̼̺͔̙̹͇̘̯̖̠̞̺̟͔̞̗̯̞̯̜͈͓͈̪̤̗͇̳̬̰̺͚͚̮̥͔̳̪̯͈̺̭̟̂̓̋̆̄̒̎͆̉̿͋̿̆̓̓̿͒̓̓̆̄̃̓̓͌̊̎͛̋̏̈́͒͋͂͊̽̄̉̈́͌̒̏̕̚͠͝͝ͅͅʜ̵̡̡̛̰̭͖̱̮̟̲̻̥̙͖̪̰̟̦̲̫͎̳̙̰̳͕̣̻̙͕̞̻͈̇͑̓̔̎͒̐͆̽̍̌́͂̄̀̿͊̔̀̅͝͝͝ɒ̴̢̢̧̨̛̛͖͖̯̙̗̗̫̺̥͈͓̬̹̖͚̜̺̘̤̜̠͎̺̝̳͇̻̩̫̠̠͚̑̋̃̂̀͊́͊̔́͋̇̇̀̽͐͆͌̂̄͛͛́̈̒̈̋̈̆̎̂̓͂̒͐̓͛͜͜͠͠͠͠͠͝͝͝ǝ̶̨̢̧̛̛̜̭͓̲͙͖̳͍̯̯̫̯̤͍̱̺̯̱͔̫̯͖͕̱̹͚̳̘͕̮̑̍̓̆́̈̾́͌́̂̏̃̾̋̄́͆̔͑̉̾̏͐̽́͋͌̑̏̄̅͂͆͊̆̚̕̚̚͜͝ͅ"
    }  else if (boolean > 1.2 && boolean < 1.3){
      //text option 10
      var newText = "Ә̵̢͓̤͍̤̔̒̎̒̓o̵̥͉̬̺̭͑̈́͂̿̏ỏ̵̧͇̻̳̻͋̈́̉̕b̴̨̟͉̰̮̽̑̇̌̕d̸̤̝̩̙̗͂̏̅̋͝γ̷̼̘̖̯͍̊́͆̌̄ǝ̵͖͙̟̞̐̏̆̋͝ͅ.̶̦̫̬̩̓̉̓̃̿ͅ"
    }
  e.innerHTML = newText;
}

//end randomize text

//randomize pos
for (e of document.getElementsByClassName("randomText")) {
  padding = Math.round(Math.random() * 50);
  padding = padding + "px"
  width = Math.round(Math.random() * 200+ 100);
  width = width + "px"
  height = Math.round(Math.random() * 200 + 50);
  height = height + "px"
  e.style.setProperty('padding', padding);
  e.style.setProperty('width', width);
  e.style.setProperty('height', height);
  top = Math.round(Math.random() * 3000);
  top = top + "px"
  bottom = Math.round(Math.random() * 3000);
  bottom = bottom + "px"
  left = Math.round(Math.random() * 1000);
  left = left + "px"
  right = Math.round(Math.random() * 1000);
  right = right + "px"
  e.style.setProperty('top', top);
  e.style.setProperty('bottom', bottom);
  e.style.setProperty('left', left);
  e.style.setProperty('right', right);
}
}


if(millis() > (currentMillisBlocks + (timerBlocks))){
  currentMillisBlocks = millis();
  console.log("pulse Blocks")
  console.log(currentMillisBlocks)
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
  margins = Math.round(Math.random() * 50);
  margins = margins + "px"
  padding = Math.round(Math.random() * 50);
  padding = padding + "px"
  width = Math.round(Math.random() * 500+ 100);
  width = width + "px"
  height = Math.round(Math.random() * 500 + 50);
  height = height + "px"
  e.style.setProperty('margin', margins);
  e.style.setProperty('padding', padding);
  e.style.setProperty('width', width);
  e.style.setProperty('height', height);
  e.style.setProperty('margin', margins);
  e.style.setProperty('padding', padding);
  e.style.setProperty('width', width);
  e.style.setProperty('height', height);
  top = Math.round(Math.random() * 3000);
  top = top + "px"
  bottom = Math.round(Math.random() * 3000);
  bottom = bottom + "px"
  left = Math.round(Math.random() * 1000);
  left = left + "px"
  right = Math.round(Math.random() * 1000);
  right = right + "px"
  e.style.setProperty('top', top);
  e.style.setProperty('bottom', bottom);
  e.style.setProperty('left', left);
  e.style.setProperty('right', right);
}
//end margins
}
}