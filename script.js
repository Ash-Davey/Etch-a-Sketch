//Default value for grid when first loaded
var defaultTable = 10;
createTable();

//Update grid when clicking button
document.getElementById("left").addEventListener("click", () => {
    var userInput = prompt("Enter a number below 100 to change grid size.");

    if (userInput > 100) {
        alert("Choose a number below 100!");
    } else {
        defaultTable = userInput;
    }
    createTable();
});

//Clear screen
document.getElementById("right").addEventListener("click", () => {
    document.getElementById("screen").textContent = "";
    createTable();
});

// Creating Div's for the screen
function createTable() {
    document.getElementById("screen").textContent = "";

    percent = 100 / defaultTable;

    for (x = 0; x < defaultTable ** 2; x++) {

        var pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.height = percent + "%";
        pixel.style.width = percent + "%";
        document.getElementById("screen").appendChild(pixel);
    }
    // Change colour when hover over with mouse
    document.querySelectorAll(".pixel").forEach((pixel) => {
    pixel.addEventListener("mouseover", ()=> {
        //Random colour
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween (0, 255);
        const g = randomBetween (0, 255);
        const b = randomBetween (0, 255);
        const rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        pixel.style.background = rgb;
        pixel.style.opacity = (parseFloat(pixel.style.opacity) || 0) + 0.1;

    })
});
}





