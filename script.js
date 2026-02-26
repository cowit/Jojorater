const canvas = document.getElementById("radar-canvas");
const ctx = canvas.getContext("2d");

let pathArray = [{ x: 112, y: 66 }, { x: 149, y: 55 }, { x: 185, y: 66 }, { x: 185, y: 86 }, { x: 149, y: 96 }, { x: 112, y: 87 }]

let radarPath = new Path2D();
console.log(document.getElementById("character-potential").value)
document.getElementById("character-potential").addEventListener("input", (event) => {
    pathArray[0] = potentialDictionary[6 - event.target.value]
})
var potentialDictionary = [
    { x: 78, y: 55 },
    { x: 89, y: 58 },
    { x: 100, y: 62 },
    { x: 112, y: 66 },
    { x: 124, y: 69 },
    { x: 137, y: 72 },
    { x: 149, y: 76 },
]
document.getElementById("character-power").addEventListener("input", (event) => {
    pathArray[1] = powerDictionary[6 - event.target.value]
})
var powerDictionary = [
    { x: 149, y: 35 },
    { x: 149, y: 42 },
    { x: 149, y: 49 },
    { x: 149, y: 55 },
    { x: 149, y: 62 },
    { x: 149, y: 69 },
    { x: 149, y: 76 },
]
document.getElementById("character-speed").addEventListener("input", (event) => {
    pathArray[2] = speedDictionary[6 - event.target.value]
})
//radarPath.lineTo(149, 76);
var speedDictionary = [
    { x: 220, y: 56 },
    { x: 209, y: 58 },
    { x: 197, y: 62 },
    { x: 185, y: 66 },
    { x: 172, y: 69 },
    { x: 160, y: 72 },
    { x: 149, y: 76 },
]
document.getElementById("character-range").addEventListener("input", (event) => {
    pathArray[3] = rangeDictionary[6 - event.target.value]
})
//radarPath.lineTo(220, 96);
var rangeDictionary = [
    { x: 220, y: 96 },
    { x: 209, y: 93 },
    { x: 197, y: 90 },
    { x: 185, y: 86 },
    { x: 172, y: 83 },
    { x: 160, y: 80 },
    { x: 149, y: 76 },
]
document.getElementById("character-durability").addEventListener("input", (event) => {
    pathArray[4] = durabilityDictionary[6 - event.target.value]
})
//radarPath.lineTo(149, 89);
var durabilityDictionary = [
    { x: 149, y: 116 },
    { x: 149, y: 110 },
    { x: 149, y: 103 },
    { x: 149, y: 96 },
    { x: 149, y: 89 },
    { x: 149, y: 82 },
    { x: 149, y: 76 },
]
document.getElementById("character-precision").addEventListener("input", (event) => {
    pathArray[5] = precisionDictionary[6 - event.target.value]
})
//radarPath.lineTo(137, 80); //Precision
var precisionDictionary = [
    { x: 78, y: 96 },
    { x: 89, y: 93 },
    { x: 100, y: 90 },
    { x: 112, y: 87 },
    { x: 124, y: 83 },
    { x: 137, y: 80 },
    { x: 149, y: 76 },
]


window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    radarPath = new Path2D()
    pathArray.forEach((value, index) => {
        if (index == 0) {
            radarPath.moveTo(value.x, value.y)
        }
        else {
            radarPath.lineTo(value.x, value.y)
        }
    })
    ctx.fillStyle = "#ff0000a3"
    ctx.fill(radarPath, "nonzero")
}, 100)

ctx.fillStyle = "#ff0000a3"
ctx.fill(radarPath, "nonzero")


document.getElementById("character-name").addEventListener("input", (event) => {
    document.getElementById("character-name-display").textContent = event.target.value
})

document.getElementById("character-master").addEventListener("input", (event) => {
    document.getElementById("master-name-display").textContent = event.target.value
})

document.getElementById("character-image").addEventListener("change", (event) => {
    console.log(event.target.value)
    console.log(event.target.files)
    document.getElementById("character-image-display").src = URL.createObjectURL(event.target.files[0])
})