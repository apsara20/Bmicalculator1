function CalculateBmi() {
    let weight = (document.getElementById("weight").value);
    let height = (document.getElementById("height").value);
     let height1=height/100
    // Calculate BMI
    let bmi = weight / (height1 * height1);
    
 // Display the result
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi;


    // Display the BMI category
    var category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("category").innerHTML = "Category: " + category;
}
