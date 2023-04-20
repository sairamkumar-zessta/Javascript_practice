let image = document.getElementById("image");
let imageWidthText = document.getElementById("imageWidth");
let warningMessage = document.getElementById("warningMessage");
let imageWidth = 200;
image.style.width = imageWidth+"px";
imageWidthText.textContent = imageWidth+"px";
function decrease(){
    if (imageWidth <= 100){
        warningMessage.textContent = "TOO small increase the size of image.";
    }
    else{
        imageWidth -= 5;
        image.style.width = imageWidth + "px";
        imageWidthText.textContent = imageWidth+"px";
         warningMessage.textContent ="";
    }
}
function increase(){
    if (imageWidth >= 300){
        warningMessage.textContent = "TOO big decrease the size of image.";
    }
    else{
        imageWidth += 5;
        image.style.width = imageWidth + "px";
        imageWidthText.textContent = imageWidth+"px";
        warningMessage.textContent ="";
    }
}