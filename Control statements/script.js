
function checkAge() {
    let age = Number(document.getElementById("age").value);

    if (age > 18) {
        document.getElementById("ageResult").innerText = "You are an adult";
    } else {
        document.getElementById("ageResult").innerText = "You are not an adult";
    }
}

function checkTemp() {
    let temp = Number(document.getElementById("temp").value);

    if (temp >= 50) {
        document.getElementById("tempResult").innerText = "It's hot outside!";
    } else {
        document.getElementById("tempResult").innerText = "it's not hot outside!";
    }
}

function startCount() {
    let num = Number(document.getElementById("countNum").value);
    let output = "";

    for (let i = 0; i <= num; i++) {
        output += i + " ";
    }

    document.getElementById("countResult").innerText = output;
}