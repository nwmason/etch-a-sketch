function generateGrid(gridNumber = 16) {
    const etchScreen = document.querySelector(".etch-screen");
    const input = document.querySelector("input");
    const etchPixel = document.querySelectorAll(".etch-pixel");

    etchPixel.forEach(div => {
        div.remove();
    })
    // ensures pixel sizes are even and relatively more square-like
    let basis = 100 / gridNumber
    console.log(basis);

    for (let c = 0; c < gridNumber; c++) {
        for (let r = 0; r < gridNumber; r++) {
            const gridCheckbox = document.querySelector(".grid-checkbox");
            const etchPixel = document.createElement("div");

            // persistent grid check box so you don't need to repeatedly check a grid
            if (gridCheckbox.checked) {
                etchPixel.setAttribute("class", "etch-pixel bordered");
                etchPixel.style.flexBasis = `${basis}%`;
                etchScreen.appendChild(etchPixel);   
            } else {
                etchPixel.setAttribute("class", "etch-pixel");
                etchPixel.style.flexBasis = `${basis}%`;
                etchScreen.appendChild(etchPixel);
            }
        }      
    }

    input.focus();
}

function fetchColor() {
    const colorPicker = document.querySelector(".color-picker");
    color = colorPicker.value;

    return color;
}

function colorGrid() {
    const etchPixels = document.querySelectorAll(".etch-pixel");

    etchPixels.forEach(etchPixel => {
        etchPixel.addEventListener("mouseover", () => {
            color = fetchColor();
            etchPixel.style["background-color"] = color
        })
    })
}

// -------------------------------------------------- //
const generateButton = document.querySelector(".generate");
const inputGrid = document.querySelector("#grid-size");
const gridCheckbox = document.querySelector(".grid-checkbox");
const clearCanvas = document.querySelector(".clear-canvas")

generateButton.addEventListener("click", () => {
    if (inputGrid.value < 16 || inputGrid.value > 128) {
        alert("Grid size must be within the specified range!");
    } else {
        generateGrid(inputGrid.value);
        colorGrid();
    }
});

gridCheckbox.addEventListener("change", () => {
    const etchPixel = document.querySelectorAll(".etch-pixel");
    
    if (gridCheckbox.checked) {
        etchPixel.forEach(etchPixel => {
            etchPixel.setAttribute("class", "etch-pixel bordered");
        });
        console.log("border added");

    } else {
        etchPixel.forEach(etchPixel => {
            etchPixel.setAttribute("class", "etch-pixel");
        })
        console.log("border removed");
    }
});

clearCanvas.addEventListener("click", () => {
    
})