let box = document.querySelector("a-box")
let boxRot = box.getAttribute('rotation')

while(true){
    boxRot.x += 1
    boxRot.y += 1
    boxRot.z += 1
    document.querySelector("a-box").setAttribute('rotation', boxRot)
    await sleep(100)
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }