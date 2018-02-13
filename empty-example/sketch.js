var mic;
var fft;

function setup() {
   createCanvas(windowWidth, windowHeight);
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT(0.9, 1024);
   fft.setInput(mic);
}

function draw() {
   background('#020b49');
   noStroke();
   var spectrum = fft.analyze();
   var volume = mic.getLevel();
   var threshold = 150;
   var threshold2 = 255;
   //var threshold = 0.05;

   beginShape();
   for (i = 0; i < spectrum.length ; i++) {
     //if (volume > threshold) {
    if (spectrum[i] > threshold) {
      fill(spectrum[i], spectrum[i]/10, 0);
    } else {
      fill(0, spectrum[i]/10, spectrum[i]);
    }
    var x = map(i, 0, spectrum.length/10, 0, width);
    var h = map(spectrum[i], 0, 255, 0, height);
    rect(x, height, spectrum.length/20, -h);
   }

   endShape();
var i = max(spectrum);
   // console.log(i);
i = spectrum.indexOf(i);
   console.log(i);
}
