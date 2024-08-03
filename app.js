const etchScreen = document.querySelector(".etch-screen");

function generateGrid(gridNumber = 16) {
    let basis = 100 / gridNumber
    console.log(basis);

    for (let c = 0; c < gridNumber; c++) {
        for (let r = 0; r < gridNumber; r++) {
            const etchPixel = document.createElement("div");
            etchPixel.setAttribute("class", "etch-pixel");
            etchPixel.style.flexBasis = `${basis}%`;
            etchScreen.appendChild(etchPixel);
        }      
    }
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    generateGrid();
})