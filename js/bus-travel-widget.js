function travelApp() {
    // Variables to be used in Factory Function
    var cost = 0;
    var departureTime = ""
    
    function tripCost(destination,travelTime){
        switch(destination){
            case "Khayelitsha":
                if(travelTime === "Peak"){
                    cost = 40 * 1.25;
                }
                else{
                    cost = 40;
                }
    
                
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
    function getTravelTime(travelTimeElem){
        for (var i = 0; i < travelTimeElem.length; i++) {
            if (travelTimeElem[i].checked) {
                // Get the value of the selected radio button
                departureTime = travelTimeElem[i].value;
               
                break; // Exit the loop once the selected radio button is found
            }
        }
        return departureTime;
    }
    function resetValues(){
        return 0;
    }
    

    return {
        tripCost,
        resetValues,
        getTravelTime
    }
}