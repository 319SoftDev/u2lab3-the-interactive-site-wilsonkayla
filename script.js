// YOUR CODE HERE
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
    //the color that was selected
    if (color === 'blue'){
        radioOutput.innerHTML = "You picked blue 💙";  
    } else if (color === 'green'){
        radioOutput.innerHTML = "You picked green 💚";
    }else if (color === 'pink'){
        radioOutput.innerHTML = "You picked pink 💕";
    } else if (color === 'black'){
        radioOutput.innerHTML = "You picked black 🖤";
    };
    const color = e.target.value;
    

};
radioInput.addEventListener('change', (e) => {
    displayColor(e);
});
//radioInput.addEventListener('change', displayColor);
// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

