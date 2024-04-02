function myToggle() {
  var element = document.getElementById("navbarNav");
  element.classList.toggle("show");
}

function preloader() {
  const imagesList = [
    "./img/turbine.jpg",
    "./img/Light.jpg",
    "./img/solar.jpg",
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
    images[i] = new Image();
    images[i].src = imagesList[i];
  }

  console.log(
    `Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`
  );
}
window.addEventListener("load", preloader);

const resourceObject = {
  wind: {
    headingContent: "Wind Turbines",
    bodyText:
      " Set up wind turbines on your property to harness the power of the wind and generate electricity. Wind energy is clean, sustainable, and suitable for locations with consistent wind patterns.",
    imgUrl: "./img/turbine.jpg",
    imgAlt: "Wind Turbine",
  },
  appliances: {
    headingContent: "Energy-Efficient Appliances",
    bodyText:
      "Upgrade to energy-efficient appliances such as LED lighting, ENERGY STAR-rated refrigerators, and smart thermostats. These appliances consume less energy, reducing your overall electricity usage and lowering your utility bills. ",
    imgUrl: "./img/Light.jpg",
    imgAlt: "LED Light",
  },
  solar: {
    headingContent: "Solar Panels",
    bodyText:
      "Install photovoltaic (PV) panels on your roof or property to convert sunlight into electricity. Solar energy is abundant, renewable, and can significantly reduce your reliance on traditional power sources.",
    imgUrl: "./img/solar.jpg",
    imgAlt: "solar panel",
  },
};

const btn1 = document.getElementById("wind");
const btn2 = document.getElementById("appliances");
const btn3 = document.getElementById("solar");
const solutionContainer = document.getElementById("solution-container");
const solutionHeading = document.getElementById("solution-heading");
const solutionImg = document.getElementById("solution-img");
const solutionText = document.getElementById("solution-text");

function handleSelection(event) {
  btn1.classList.remove("active-button");
  btn2.classList.remove("active-button");
  btn3.classList.remove("active-button");

  event.target.classList.add("active-button");

  const selectedButtonId = event.target.id;

  const selectedSolution = resourceObject[selectedButtonId];

  solutionHeading.innerText = selectedSolution.headingContent;
  solutionImg.src = selectedSolution.imgUrl;
  solutionImg.alt = selectedSolution.imgAlt;
  solutionText.innerText = selectedSolution.bodyText;
}

btn1.addEventListener("click", handleSelection);
btn2.addEventListener("click", handleSelection);
btn3.addEventListener("click", handleSelection);
