let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let btnEl = document.getElementById("button");
let bgContainer = document.getElementById("bgContainer");
let n = bgColorsArray.length;
btnEl.onclick = function() {
    let index = Math.ceil(Math.random() * n);
    bgContainer.style.backgroundColor = bgColorsArray[index];
}