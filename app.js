const etchScreen = document.querySelector(".etch-screen");

function generateGrid(gridNumber = 16) {
    for (let c = 0; c < column; c++) {
        for (let r = 0; r < row; r++) {
            const etchPixel = document.createElement("div");
            etchPixel.setAttribute("class", "etch-pixel");
            // etchPixel.setAttribute("style", 'flex-basis: ${100/gridNumber};')
            etchScreen.appendChild(etchPixel);
        }      
    }
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    generateGrid();
})