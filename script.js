// Creating Div's for the screen
for (x = 0; x < 888; x++) {
    var pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.id = "pixel";
    document.getElementById("screen").appendChild(pixel);
}


// Change colour when hover over with mouse
document.querySelectorAll(".pixel").forEach((pixel) => {
    pixel.addEventListener("mouseover", ()=> {
        pixel.style.background = "green";
    })
});



