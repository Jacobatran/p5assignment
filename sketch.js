
// Step 1. Make sure you COPY the 'Libraries' folder over into your editor in order to support P5




// let phase = 0;
// let speed = 0.03;
// let maxCricleSize = 20;

// let numRows = 10;
// let numCols = 16;

// let numStrands = 2;


// // In setup, we create a canvas.
// function setup() {
//     createCanvas(500, 500);
//     noStroke();

   
//     colorA = color(253, 174, 120);
//     colorB = color(226, 129, 161);
// }



// // Step 1. use Draw Loop to animate! 
// // Step 2. After creating a canvas you want to add background() function so that we can see the browser






// function draw() {
//     background(4, 58, 74);
//     phase = frameCount * speed;



// for(let strand = 0; strand < numStrands; strand += 1){
//     let strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

//     for(let col = 0; col < numCols; col += 1){
//         let colOffset = map(col, 0, numCols, 0, TWO_PI);
//         let x = map(col, 0, numCols, 50, width - 50);

//         for(let row = 0; row < numRows; row += 1) {
//             let y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
//             let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
//             let circleSize = sizeOffset * maxCricleSize;


//             fill(lerpColor(colorA, colorB, row / numRows));
    
//             ellipse(x, y, cirleSize, circleSize); 
//         }
//     }
// }
    
// }






var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup() {
  createCanvas(500, 500);
  noStroke();
  
  phase = 0;
  speed = 0.03;
  maxCircleSize = 20;
  numRows = 10;
  numCols = 16;
  numStrands = 2;
  
  colorA = color(253, 174, 120);
  colorB = color(226, 129, 161);
}

function draw() {
  background(4, 58, 74);
  phase = frameCount * speed;
  
  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    
    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, 50, width - 50);
      
      for(var row = 0; row < numRows; row += 1) {
        var y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        
        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}