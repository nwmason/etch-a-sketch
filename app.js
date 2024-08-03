const etchScreen = document.querySelector(".etch-screen");

function generateGrid(gridNumber = 16) {
    const input = document.querySelector("input");
    const etchPixel = document.querySelectorAll(".etch-pixel");
    etchPixel.forEach(div => {
        div.remove();
    })
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

    input.focus();
}

function colorGrid(color) {
    console.log("grid loaded")
    const etchPixels = document.querySelectorAll(".etch-pixel");

    etchPixels.forEach(etchPixel => {
        etchPixel.addEventListener("mouseover", () => {
            console.log("hover");
        })
    })
}

// -------------------------------------------------- //
const generateButton = document.querySelector(".generate");

generateButton.addEventListener("click", () => {
    generateGrid();
    colorGrid();
})