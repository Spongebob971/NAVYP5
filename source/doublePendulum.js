let r1 = 150; // delka lana
let r2 = 150; // delka lana
let m1 = 20; // velikost koule
let m2 = 20; // velikost koule

let g = 1;

let a1 = 3.14159 / 2; // angle theta1
let a2 = 3.14159 / 8; // angle theta2

let a1_v = 0; // velocity
let a2_v = 0; // velocity

function setup() {
  // put setup code here

  createCanvas(1024, 1024);
}

function draw() {
  //equation

  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));

  let a1_a = (num1 + num2 + num3 + num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = a1_v * a1_v * r1 * (m1 + m2);
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);

  den = r2 * (2 * m1 + m2 - m2 - cos(2 * a1 - 2 * a2));

  let a2_a = (num1 * (num2 + num3 + num4)) / den;

  // put drawing code here
  background(128);

  // + 512 and 250 is just moving this to middle of canvas.
  let x1 = r1 * sin(a1) + 512;
  let y1 = r1 * cos(a1) + 250;

  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);

  //draw
  line(512, 250, x1, y1);
  ellipse(x1, y1, m1, m1);

  line(x1, y1, x2, y2);
  ellipse(x2, y2, m2, m2);

  //update angle and angle velocity
  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;
}
