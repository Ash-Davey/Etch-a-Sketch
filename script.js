// Creating Div's for the screen
for (x = 0; x < 889; x++) {
    var pixel = document.createElement("div");
    pixel.className = "pixel";

    document.getElementById("screen").appendChild(pixel);
}


// Change colour when hover over with mouse
const draw = document.querySelector(".pixel");

draw.addEventListener("mouseover", () => {
    draw.style.backgroundColor = "green";
});

