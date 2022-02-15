const imgFileInp = document.getElementById("imgFileInp")
const canvas = document.getElementById("meme")
const upperTextInp = document.getElementById("upperText")
const bottomTextInp = document.getElementById("bottomText")
const imgName = document.getElementById("imgName")
const imgFormat = document.getElementById("imgType")

// display image on canvas
let img;
imgFileInp.addEventListener("change", () => {
    img = new Image()
    img.src = URL.createObjectURL(imgFileInp.files[0])
    img.addEventListener("load", () => {
        updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value)
    }, { once: true })
})

upperTextInp.addEventListener("change", () => {
    updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value)
})

bottomTextInp.addEventListener("change", () => {
    updateCanvas(canvas, img, upperTextInp.value, bottomTextInp.value)
})

function updateCanvas(canvas, img, upperText, bottomText){
    const ctx = canvas.getContext("2d")
    const height = img.height
    const width = img.width
    const fontSize = 20
    
    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0);
 
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

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