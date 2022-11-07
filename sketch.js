function setup() {
    helloButton = createButton('Go to Google'); // skapar en helloknapp
    helloButton.mousePressed(gotoWeb); // vid musklick, kör funktionen gotoWeb
}

function draw() {
    background(0, 200); // rita upp en kanvas
}

function gotoWeb() {
	window.open('https://google.com/'); // öppna Google i ett nytt fönster
}