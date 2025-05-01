const gridSketch = document.querySelector(".grid-sketch");
const clearButton = document.querySelector("#reset");
const randomButton = document.querySelector("#randomColor");
const colorPick = document.querySelector("#color");
const rigtSide = document.querySelector(".rigt-side");
const interactionSound = document.querySelector("#interaccion-Sound");
const changeGridSizeButton = document.querySelector("#changeGridSize");

const colorDefault = colorPick.value;
let currentColor = colorDefault;
let estaClicked = false; //check celd clicked
const gridSizeDefault = 32;
const gridSizemin = 16;
const gridSizemax = 100;
const gridSketchWidth = 960;

//color picker
function colorPiker() {
  colorPick.addEventListener("input", (event) => {
    currentColor = event.target.value;
  });
}
colorPiker();

//function for interaction sound
function playSound() {
  interactionSound.currentTime = 0; // Reset the sound to the beginning
  interactionSound.play();
}

//function for colored just one cell
function colorizeCell(cell) {
  cell.style.backgroundColor = currentColor;
}

//random color cell box
function ramdomCellColor(cell) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  cell.style.backgroundColor = "#" + randomColor;
}

//generate div box for grid
function gridBoxes(countBox =  gridSizeDefault) {
  gridSketch.innerHTML = "";
  gridSketch.style.classList = ".box";
  gridSketch.style.display = "flex";
  gridSketch.style.flexWrap = "wrap";

  const boxSize = gridSketchWidth / countBox;
  for (let i = 0; i < countBox * countBox; i++) {
    const boxGrid = document.createElement("div");
    boxGrid.classList.add("box");
    boxGrid.style.width = `${boxSize}px`;
    boxGrid.style.height = `${boxSize}px`;
    gridSketch.appendChild(boxGrid);  
  }
}
gridBoxes();

//Event delegation for GridSketch containers-------------------------------------

//set hover color grid box
gridSketch.addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target.classList.contains("box") ) {
    colorizeCell(target);
    target.dataset.hovered = "true"; //mark as hovered
  }
});




//set hover color grid box reverse


//set click color grid box
gridSketch.addEventListener("click", (event) => {
  playSound();
  const target = event.target;
  if (target.classList.contains("box")) {
    target.dataset.clicked = true; //mark as clicked
    colorizeCell(target);
  }
});

//reset grid boxes
clearButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  playSound();
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
    delete box.dataset.clicked; //remove clicked mark
    delete box.dataset.hovered; //remove clicked mark
  });
});


//ramdon color grid boxes
randomButton.addEventListener("click", () => {
  playSound();
  const hoveredBoxes = gridSketch.querySelectorAll(  ".box[data-hovered = 'true']");
  hoveredBoxes.forEach(box => {
    ramdomCellColor(box);
  });
});

changeGridSizeButton.addEventListener("click", () => {
  playSound ();
  const newSizeStr = prompt(`Enter a new grid size between min ${gridSizemin} max ${gridSizemax}:`);
  if (newSizeStr !== null) {
    const newSize = parseInt(newSizeStr);

    if (!isNaN(newSize) && newSize >= gridSizemin && newSize <= gridSizemax) {
      gridBoxes(newSize);
    }else{
      alert(`Please enter a number between ${gridSizemin} and ${gridSizemax}`);
    }
  }
});

