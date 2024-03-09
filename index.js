'use strict';

const density = 'Ñ@#$9876543210?!abc;:+=-,._ ';

let konata;

function preload(){
    konata = loadImage("./konata_klein.jpg");
}

function setup () {
createCanvas (400, 400);
}


function draw () {
background(0, 0, 0);	

let w = width / konata.width;
let h = height / konata.height;
konata.loadPixels();

//image(konata, 0, 0, width, height);


for (let i = 0; i < konata.width; i++) {
    for (let j = 0; j < konata.height; j++) {
        const pixelIndex = (i + j * konata.width) * 4;
        const r = konata.pixels[pixelIndex + 0];
        const g = konata.pixels[pixelIndex + 1];
        const b = konata.pixels[pixelIndex + 2];
        const avg = (r+ g + b) / 3;

        noStroke();
        fill(255);
        //square(i * w, j * h, w);
        const len = density.length;
        const charIndex = floor(map(avg, 0, 255, len, 0));

        textSize(w)
        text(density.charAt(charIndex), i * w, j * h);


    } 
}
}

