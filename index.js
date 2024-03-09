'use strict';

const density = 'Ñ@#$9876543210?!abc;:+=-,._ ';

let konata;
let img;

function preload(){
    
    //konata = document.getElementById("inputBtn");


    konata = loadImage("./konata_klein.jpg");
}

function setup () {
noCanvas();

let w = width / konata.width;
let h = height / konata.height;
konata.loadPixels();


for (let j = 0; j < konata.height; j++) {
    let row = '';
for (let i = 0; i < konata.width; i++) {
        const pixelIndex = (i + j * konata.width) * 4;
        const r = konata.pixels[pixelIndex + 0];
        const g = konata.pixels[pixelIndex + 1];
        const b = konata.pixels[pixelIndex + 2];
        const avg = (r+ g + b) / 3;

        noStroke();
        fill(255);
        const len = density.length;
        const charIndex = floor(map(avg, 0, 255, len, 0));

        textSize(w)
        text(density.charAt(charIndex), i * w, j * h);
        row += density.charAt(charIndex);

    } 
    createDiv(row);
}
}
