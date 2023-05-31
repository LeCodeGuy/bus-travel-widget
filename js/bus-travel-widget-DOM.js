// DOM element(s) references
let pointsElem = document.querySelector("#txtPoints");
let destinationElem = document.querySelector("#ddDestination");
let travelTimeElem = document.getElementsByName("travelTime");
let returnTripElem = document.querySelector("#returnTrip");
let btnCalculateElem = document.querySelector(".btnCalculate");
let singleTripNumberElem = document.querySelector("#tripNumberSingle");
let singleTripCostElem = document.querySelector("#tripCostSingle");
let returnTripNumberElem = document.querySelector("#tripNumberReturn");
let returnTripCostElem = document.querySelector("#tripCostReturn");

// Add event listener to 'calculate' button
btnCalculateElem.addEventListener("click",btnCalculate_onClick);

// Check if values are available in localStorage

// Instantiate the factory function
const travelApp = travelApp();

// DOM events
function btnCalculate_onClick() {

}