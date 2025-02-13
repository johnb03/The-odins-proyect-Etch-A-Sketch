
//call of grid
const gridSketch = document.querySelector(".grid-sketch");


//generate div box for grid
function gridBox() {
const boxGrid = document.createElement("div");
boxGrid.classList  = "box";
gridSketch.appendChild(boxGrid)
    
}

//generates the amount of div automatically
function gridBoxes() {
 let countBox = 16;

 for (let i = 0; i < countBox; i++){
  gridBox()
   
 }

}

gridBoxes()