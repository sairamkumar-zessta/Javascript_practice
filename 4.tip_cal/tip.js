let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

function calculate() {
    if (billAmount.value === "" || percentageTip.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else {
        errorMessage.textContent = "";
        tipAmount.value = parseInt(billAmount.value) * parseInt(percentageTip.value) * 0.01;
        totalAmount.value = parseInt(billAmount.value) + parseInt(tipAmount.value);
    }
}