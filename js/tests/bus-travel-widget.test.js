
/*
    Unit tests planned for the solution 
*/
describe("The bus travel app", function () {

    it("should reset values for the counters", function () {

        const travel = travelApp();

        assert.equal(0, travel.resetValues());
    })

    it("should calculate the trip cost based on destination an whether it is peak or off peak", function () {

        const travel = travelApp();

        assert.equal(50, travel.tripCost("Khayelitsha","Peak"));
        assert.equal(40, travel.tripCost("Khayelitsha","Off Peak"));
        assert.equal(31.25, travel.tripCost("Dunoon","Peak"));
        assert.equal(25, travel.tripCost("Dunoon","Off Peak"));
        assert.equal(37.5, travel.tripCost("Mitchells Plain","Peak"));
        assert.equal(30, travel.tripCost("Mitchells Plain","Off Peak"));
    })

})