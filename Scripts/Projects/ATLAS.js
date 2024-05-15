var images = ["junkyard2","crocbeast","mantisbeast","map","mustaria2","Reptide","stalker"]
var index = 0

function MoveIndex() {
    index += 1
    if (index >= images.length) {
        index = 0
    }

    var background = document.getElementById("BCK")
    var nextImage = "Media/Projects/ATLAS/" + images[index] + ".png"
    background.src = nextImage
}

setInterval(MoveIndex, 10000)
