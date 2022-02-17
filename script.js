const imgFileInp = document.getElementById("imgFileInp")
const canvas = document.getElementById("meme")
const upperTextInp = document.getElementById("upperText")
const bottomTextInp = document.getElementById("bottomText")
const imgName = document.getElementById("imgName")
const imgFormat = document.getElementById("imgType")
const fontSize = document.getElementById("font-size")
const strokeColor = document.getElementById("strokeColor")
const fontColor = document.getElementById("fontColor")

const parameter = "canvas, img, upperTextInp.value, bottomTextInp.value, fontSize.value, strokeColor.value, fontColor.value"
// display image on canvas
let img;
imgFileInp.addEventListener("change", () => {
    img = new Image()
    img.src = URL.createObjectURL(imgFileInp.files[0])
    img.addEventListener("load", () => {
        updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value, fontSize.value, strokeColor.value, fontColor.value)
    }, { once: true })
})

upperTextInp.addEventListener("change", () => {
    updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value, fontSize.value, strokeColor.value, fontColor.value)
})

bottomTextInp.addEventListener("change", () => {
    updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value, fontSize.value, strokeColor.value, fontColor.value)
})

fontSize.addEventListener("change", () => {
    updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value, fontSize.value, strokeColor.value, fontColor.value)
})

fontColor.addEventListener("change", () => {
    updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value, fontSize.value, strokeColor.value, fontColor.value)
})

strokeColor.addEventListener("change", () => {
    updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value, fontSize.value, strokeColor.value, fontColor.value)
})
function updateCanvas(canvas, img, upperText, bottomText, fontSize, strokeColor, fontColor){
    const ctx = canvas.getContext("2d")
    const height = img.height
    const width = img.width
    
    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0);
 
    ctx.strokeStyle = `${strokeColor}`;
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = `${fontColor}`;
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = fontSize + "px" + " Arial";
    // top text
    ctx.textBaseline = "top"
    ctx.strokeText(upperText, width / 2, height / 25)
    ctx.fillText(upperText, width / 2, height / 25)

    // bottom text
    ctx.textBaseline = "bottom"
    ctx.strokeText(bottomText, width / 2, height - (height / 25))
    ctx.fillText(bottomText, width / 2, height - (height / 25))
}

function downloadMeme(){
    if (imgName.value == ""){
        alert("Please enter a name for your meme")
        return
    }
    var image = canvas.toDataURL();  
  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = imgName.value + imgFormat.value;;  
    tmpLink.href = image;  
  
    document.body.appendChild(tmpLink);  
    tmpLink.click();  
    document.body.removeChild(tmpLink);  
}