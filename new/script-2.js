const canvas = document.getElementById("meme")
const imgFileInp = document.getElementById("imgFileInp")
const text = document.getElementById("box")

let img;
imgFileInp.addEventListener("change", () => {
    img = new Image()
    img.src = URL.createObjectURL(imgFileInp.files[0])
    img.addEventListener("load", () => {
        updateCanvas(canvas, img)
    }, { once: true })
})

text.addEventListener("change", () => {
    console.log(text.value)
})
function updateCanvas(canvas, img){
    const ctx = canvas.getContext("2d")
    const height = img.height
    const width = img.width
    
    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0);
}