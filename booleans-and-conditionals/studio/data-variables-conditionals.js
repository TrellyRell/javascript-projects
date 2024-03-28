// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34";
let astronautCount = 7;
let astronauntStatus = "ready";
let averageAstronautMassKG = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKG;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelTemp = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("Too many astronaunts");
    preparedForLiftOff = false;
} else {
       console.log("the perfect amount");
}
// add logic below to verify all astronauts are ready
if (astronauntStatus != "ready") {
    console.log("not ready");
    preparedForLiftOff = false;
} else {
       console.log("ready for lift off");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000

if  (totalMassKg < maximumMassLimit) {
    console.log("weight is good ");
} else
       console.log("weight exceeded");
       preparedForLiftOff = false;

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fue)
// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
 
