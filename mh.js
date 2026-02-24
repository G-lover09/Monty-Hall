let chance = [1, 2, 3];
let randomDoor = chance[Math.floor(Math.random() * chance.length)];
let a = [2, 3];
let fno = 0;
if (randomDoor == 1) {
  fno = a[Math.floor(Math.random() * a.length)];
} else if (randomDoor == 2) {
  fno = 3;
} else if (randomDoor == 3) {
  fno = 2;
} else {
}

if (fno == 2) {
  fdot = "second";
} else {
  fdot = "third";
}

let b = [1, 3];
let sno = 0;
if (randomDoor == 2) {
  sno = b[Math.floor(Math.random() * b.length)];
} else if (randomDoor == 1) {
  sno = 3;
} else if (randomDoor == 3) {
  sno = 1;
} else {
}

if (sno == 1) {
  sdot = "first";
} else {
  sdot = "third";
}

let c = [1, 2];
let tno = 0;
if (randomDoor == 3) {
  tno = c[Math.floor(Math.random() * c.length)];
} else if (randomDoor == 1) {
  tno = 2;
} else if (randomDoor == 2) {
  tno = 1;
} else {
}

if (tno == 1) {
  tdot = "first";
} else {
  tdot = "second";
}
let door1 = 0;
if (randomDoor == 1) door1 = "win";
else door1 = "lose";

let door2 = 0;
if (randomDoor == 2) door2 = "win";
else door2 = "lose";

let door3 = 0;
if (randomDoor == 3) door3 = "win";
else door3 = "lose";

function aa() {
  document.getElementById(fdot).innerHTML =
    fno + " is not the win\nclick here to continue";
}
function bb() {
  document.getElementById(sdot).innerHTML =
    sno + " is not the win\nclick here to continue";
}
function cc() {
  document.getElementById(tdot).innerHTML =
    tno + " is not the win\nclick here to continue";
}

function winA() {
  document.getElementById(door1).innerHTML = "click here to see what you won";
}

function winB() {
  document.getElementById(door2).innerHTML = "click here to see what you won";
}

function winC() {
  document.getElementById(door3).innerHTML = "click here to see what you won";
}
