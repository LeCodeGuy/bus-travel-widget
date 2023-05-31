function travelApp() {
    // Variables to be used in Factory Function
    var cost = 0;
    function calculate(destination,travelTime) {

    }
    function tripCost(destination,travelTime){
        switch(destination){
            case "Khayelitsha":
                if(travelTime === "Peak"){
                    cost = 40 * 1.25;
                }
                else{
                    cost = 40;
                }
    
                // if(returnTrip === true){
                //     cost = Number(cost) * 2;
                // }
    
                
                break;
            case "Dunoon":
                if(travelTime === "Peak"){
                    cost = 25 * 1.25;
                }
                else{
                    cost = 25;
                }
                break;
            case "Mitchells Plain":
                if(travelTime === "Peak"){
                    cost = 30 * 1.25;
                }
                else{
                    cost = 30;
                }
                break;
        }
        return cost;
    }
    function travelTime(optionSelected) {
        //if
    }

    function tripType() {
        
    }

    function singleTrips() {

    }

    function singleTripPrice() {

    }

    function returnTrips() {

    }

    function returnTripPrice() {

    }

    return {
        calculate,
        tripCost,
        travelTime,
        tripType,
        singleTrips,
        singleTripPrice,
        returnTrips,
        returnTripPrice
    }
}