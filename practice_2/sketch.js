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
   //var volume = mic.getLevel();
   var threshold = 180;
   var threshold2 = 220;

   beginShape();
   for (i = 0; i < spectrum.length; i++) {
    if (spectrum[i] > threshold && spectrum[i] < threshold2) {
      fill(spectrum[i], 0, spectrum[i]/2);
    } else if (spectrum[i] > threshold2) {
      fill(spectrum[i], 0, 0);
    } else {
      fill(0, spectrum[i]/10, spectrum[i]);
    }
    var x = map(i, 0, spectrum.length/40, 0, width);
    var h = map(spectrum[i], 0, 255, 0, height);
    if (spectrum[i] > 240) {
      rect(x, height, spectrum.length/20, h);
    } else {
      rect(x, height, spectrum.length/20, -h);

    }
   }
   endShape();
// var i = max(spectrum);
//    // console.log(i);
// i = spectrum.indexOf(i);
//    console.log(i);
}
