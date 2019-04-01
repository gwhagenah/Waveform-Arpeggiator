let square = document.getElementById('square');
let triangle = document.getElementById('triangle');
let saw = document.getElementById('saw');
let sine = document.getElementById('sine');
let arp = document.getElementsByClassName('arp');
let off = document.getElementById('off');
let on = document.getElementById('on');
let info = document.getElementById('info');


//capture all lower keys
var a = document.getElementById('a');
var s = document.getElementById('s');
var d = document.getElementById('d');
var f = document.getElementById('f');
var g = document.getElementById('g');
var h = document.getElementById('h');
var j = document.getElementById('j');
var k = document.getElementById('k');
var l = document.getElementById('l');
var semicolon = document.getElementById('semicolon');
var apost = document.getElementById('apost');
//capture all upper keys
var w = document.getElementById('w');
var ee = document.getElementById('e');
var t = document.getElementById('t');
var y = document.getElementById('y');
var u = document.getElementById('u');
var o = document.getElementById('o');
var p = document.getElementById('p');


var currentWave = "square";
var octave = 4;
var arpActive = false;
var infoShown = false;

square.addEventListener('click', select, false);
triangle.addEventListener('click', select, false);
saw.addEventListener('click', select, false);
sine.addEventListener('click', select, false);
arp[0].addEventListener('click', toggle, false);
info.addEventListener('click', showInfo, false);
window.addEventListener('keydown', note, false);

function toggle(e){
    if(arpActive){
        off.classList.remove('hide');
        on.classList.add('hide');
    }
    else {
        on.classList.remove('hide');
        off.classList.add('hide');
    }
    arpActive = !arpActive;
}

function showInfo(e){
    if(infoShown){
        information.classList.add('hide');
    }
    else {
        information.classList.remove('hide');
    }
    infoShown = !infoShown;
}

function select(e){
    var s = document.getElementsByClassName('select');
    var body = document.body;
    var siblings = this.parentNode.children;
    var sibling = siblings[1];
    for (i = 0; i < s.length; i++) {
        s[i].classList.remove('active')
    }
    if(this.id === "square"){
        sibling.classList.add('active');
        body.style.backgroundColor = "rgb(95, 110, 248)";
        currentWave = "square";
    }
    if(this.id === "triangle"){
        sibling.classList.add('active');
        body.style.backgroundColor = "rgb(216, 65, 65)";
        currentWave = "triangle";
    }
    if(this.id === "saw"){
        sibling.classList.add('active');
        body.style.backgroundColor = "rgb(255, 202, 27)";
        currentWave = "sawtooth";
    }
    if(this.id === "sine"){
        sibling.classList.add('active');
        body.style.backgroundColor = "rgb(9, 163, 86)";
        currentWave = "sine";
    }
}


function note(e){
    if (e.metaKey || e.ctrlKey) {return;}
    e.preventDefault();
    var code = e.which || data;
    var index = [];
    tones.type = currentWave;
    tones.attack = 6;
    tones.release = 150;
    switch (code) {
          // a - '
          case 65:
            tones.play('c', octave);
            restart(a);
            break;
          case 83:
            tones.play('d', octave);
            restart(s);
            break;
          case 68:
            tones.play('e', octave);
            restart(d);
            break;
          case 70:
            tones.play('f', octave);
            restart(f);
            break;
          case 71:
            tones.play('g', octave);
            restart(g);
            break;
          case 72:
            tones.play('a', octave);
            restart(h);
            break;
          case 74:
            tones.play('b', octave);
            restart(j);
            break;
          case 75:
            tones.play('c', octave+1);
            restart(k);
            break;
          case 76:
            tones.play('d', octave+1);
            restart(l);
            break;
          case 186:
            tones.play('e', octave+1);
            restart(semicolon);
            break;
          case 59:
            tones.play('e', octave+1);
            restart(semicolon);
            break;
          case 222:
            tones.play('f', octave+1);
            restart(apost);
            break;

            // q - p
          case 87:
            tones.play('c#', octave);
            restart(w);
            break;
          case 69:
            tones.play('d#', octave);
            restart(ee);
            break;
          case 84:
            tones.play('f#', octave);
            restart(t);
            break;
          case 89:
            tones.play('g#', octave);
            restart(y);
            break;
        case 85:
          tones.play('a#', octave);
          restart(u);
          break;
        case 79:
          tones.play('c#', octave+1);
          restart(o);
          break;
        case 80:
          tones.play('d#', octave+1);
          restart(p);
          break;
    }

    function restart(key) {
        key.classList.remove('fade-out');
        void key.offsetWidth;
        key.classList.add('fade-out');
    }
}