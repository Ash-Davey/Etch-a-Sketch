// Creating Div's for the screen
for (x = 0; x < 888; x++) {
    var pixel = document.createElement("div");
    pixel.className = "pixel";
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



