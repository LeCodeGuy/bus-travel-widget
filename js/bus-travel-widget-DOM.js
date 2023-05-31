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


/*
Destinations    |   Cost    |   Peak Hour increase
Khayelitsha     |   R40     |   +25%
Dunoon          |   R25     |   +25%
Mitchells Plain |   R30     |   +25%
*/

// Add event listener to 'calculate' button
btnCalculateElem.addEventListener("click",btnCalculate_onClick);

// Instantiate the factory function
const travel = travelApp();

// DOM events
function btnCalculate_onClick() {
    var pointsAvailable = pointsElem.value;
    var destination = destinationElem.options[destinationElem.selectedIndex].text;
    var travelTime = "";

    // resets the values
    singleTripNumberElem.value = travel.resetValues();
    singleTripCostElem.value = travel.resetValues();
    returnTripNumberElem.value = travel.resetValues();
    returnTripCostElem.value = travel.resetValues();
    
    // determine whether the traveller is travelling during peak or off-peak times
    travelTime = travel.getTravelTime(travelTimeElem);

    //check whether the traveller opted for a return trip
    if(returnTripElem.checked ===  true && Number(pointsAvailable) > 0) {        
        // set the return trip values
        returnTripNumberElem.value = (Number(pointsAvailable)/Number(travel.tripCost(destination,travelTime)*2)).toFixed(2);//++;//;pointsAvailable//;
        returnTripCostElem.value = (Number(travel.tripCost(destination,travelTime)*2)).toFixed(2); 
    }
    else if(returnTripElem.checked ===  false && Number(pointsAvailable) > 0){
        // set the single trip values
        singleTripNumberElem.value =(Number(pointsAvailable)/Number(travel.tripCost(destination,travelTime))).toFixed(2);// parseInt(returnTripNumberElem.value) + 1;
        singleTripCostElem.value = (Number(travel.tripCost(destination,travelTime))).toFixed(2);
    }

}