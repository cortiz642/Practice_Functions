function bmiCalculator(Weight, Height){
   var userWeight = prompt("What is your weight in kg?")
    var userHeight = prompt("What is your height in m")
    var bmi = userWeight / (userHeight * userHeight);
    alert(Math.round(bmi));
}
bmiCalculator();