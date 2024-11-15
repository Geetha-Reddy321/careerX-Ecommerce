const kurtaImage = document.getElementById("kurta-img");

// Define the function to change the image based on the selected color
function changeImage(color) {
    if (color === "purple") {
        kurtaImage.src = "img purple.png";
    } else if (color === "blue") {
        kurtaImage.src = "img blue.png";
    } else if (color ==="grey") {
        kurtaImage.src = "img grey.png";
    } else if (color === "black") {
        kurtaImage.src = "img black.png";
    } else {
        kurtaImage.src = "img purple.png"; // Default image
    }
}

// Select all color buttons
const colorButtons = document.querySelectorAll(".color-btn");
colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Get the color from data-color attribute
        const color = button.getAttribute("data-color");

        // Call the changeImage function with the selected color
        changeImage(color);
    });
});

