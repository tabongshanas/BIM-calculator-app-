
function calculateBMI() {

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if(height == "" || weight == "") {
        alert("Please enter valid height and weight values");
    }

    else {
        // height /= 100;

        const BMI = weight / (height ** 2);
        document.querySelector("#result").innerHTML = BMI.toFixed(2);

        let status = "";
        status = BMI < 18.5 ? "Underweight" : BMI > 18.5 && BMI < 25 ? "Healthy" /n
        : BMI >= 25 && BMI < 30 ? "Overweight" : BMI > 30 ? "Obese" : "change";

        let comment = `You are <span id="comment">${status}</span>`;

        document.querySelector("#comment").innerHTML = comment;

    }
}