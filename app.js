const form = document.querySelector("#task-form");
const weight = document.querySelector("#InputWeigth");
const height = document.querySelector("#InputHeight");
const age = document.querySelector("#InputAge");

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
}
function addTask(event) {
    if (age.value < 20 || age.value > 60) {
        alert('Works only for ages between 20-60');
    }
    else {

        // weight(kg) / height(m)squared
        const BMI = Math.round(weight.value / ((height.value / 100) * (height.value / 100)));
        var category = "error"
        if (BMI < 16) {
            category = "Starving";
        } else if (BMI < 18.6) {
            category = "Underweight";
        } else if (BMI < 25.1) {
            category = "Normal";
        } else if (BMI < 30.1) {
            category = "Overweight";
        } else if (BMI < 35.1) {
            category = "Obese";
        } else if (BMI < 40.1) {
            category = "Clinically Obese";
        } else { 
            category = "Morbidly Obese"; 
        }
        alert("Your BMI is " + BMI + " you are " + category);
        //var div = document.createElement("div");
        //div.innerText = "your bmi is " + BMI;
        //div.classList.add("bmiDisplay");
        //deleteExisting();
        //document.body.appendChild(div);

    }

    event.preventDefault();
}

function deleteExisting() {
    var elements = document.getElementsByClassName("bmiDisplay");
    console.log(elements);
}