// YOUR CODE HERE

// task 1 
//consts
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");
// function 
const displayColor = (e) => {
  const color = e.target.value;  
  if (color === "blue") {
    radioOutput.innerHTML = `You picked blue 💙`;
  } else if (color === "green") {
    radioOutput.innerHTML = `You picked green 💚`;
  } else if (color === "pink") {
    radioOutput.innerHTML = `You picked pink 💕`;
  } else if (color === "black") {
    radioOutput.innerHTML = `You picked black 🖤`;
  }
};
radioInput.addEventListener('change', displayColor);

// task 2 
//const
const randomNumber = getRandomInt();  
console.log(randomNumber); 

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");
//function 
const checkNumber = (e) => {
  const value = e.target.valueAsNumber; //googled 
  if (value < randomNumber) {
    numOutput.innerHTML = `Not ${value}, guess higher!`;
  } else if (value > randomNumber) {
    numOutput.innerHTML = `Not ${value}, guess lower!`;
  } else {
    numOutput.innerHTML = `Hurray! You got it! It's ${value}`;
  }
  e.target.select(); //also googled (still dont get ask KIL)
};

numInput.addEventListener('change', checkNumber);
//task 3 
//dont understand ask
const correctContinents = [
    "north america", "europe", "asia", "south america", "africa", "australia", "antarctica"
  ];
  
  const continentImages = {
    "north america": document.getElementById("north-america"),
    "europe": document.getElementById("europe"),
    "asia": document.getElementById("asia"),
    "south america": document.getElementById("south-america"),
    "africa": document.getElementById("africa"),
    "australia": document.getElementById("australia"),
    "antarctica": document.getElementById("antarctica"),
  };
  
  const srAlert = document.getElementById("sr-continent-alert");
  const textInput = document.getElementById("text-input");
  
  let guessedContinents = 0;
  
  const checkContinent = (e) => {
    const continent = e.target.value.toLowerCase().trim();
  
    if (correctContinents.includes(continent)) {
      
      if (!continentImages[continent].classList.contains('hidden')) {
        srAlert.innerHTML = `${continent} has already been selected.`;
      } else {
        
        continentImages[continent].classList.remove('hidden');
        guessedContinents++;
  
        
        srAlert.innerHTML = `${continent} is a continent. ${guessedContinents} out of 7.`;
      }
    } else {
      
      srAlert.innerHTML = `${continent} is not a continent.`;
    }
  
    
    e.target.select();
  };
  
  
  textInput.addEventListener('change', checkContinent);
  
  
// Make it accessible
// screen readers 
radioOutput.setAttribute('aria-live', 'polite');
radioOutput.setAttribute('aria-atomic', 'true');
srAlert.setAttribute('aria-live', 'polite');
srAlert.setAttribute('aria-atomic', 'true');
numOutput.setAttribute('aria-live', 'polite');
numOutput.setAttribute('aria-atomic', 'true');