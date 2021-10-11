

window.onload = async function () {

    //animacja pudełka
    let box = document.querySelector("a-box")
    let boxRot = box.getAttribute('rotation')

    setInterval( ()=>{
        boxRot.x += 0.8
        boxRot.y += 0.8
        boxRot.z += 0.8
        document.querySelector("a-box").setAttribute('rotation', boxRot)
    }, 50)

    //animacja kuli
    let sphere = document.querySelector("a-sphere")
    let sphereCol = parseInt(sphere.getAttribute('color').replace(/^#/, ''), 16)

    setInterval( ()=>{
        sphereCol += 1
        document.querySelector("a-sphere").setAttribute('color', '#' + sphereCol.toString(16))
    }, 20)

    //animacja walca
    let cylinder = document.querySelector("a-cylinder")
    let cylinderSize = cylinder.getAttribute('scale')

    enlarging = 1
    setInterval( ()=>{
        if(enlarging) {
            cylinderSize.x += 0.02
            cylinderSize.y += 0.02
            cylinderSize.z += 0.02
            document.querySelector("a-cylinder").setAttribute('scale', cylinderSize)
        }
        if(!enlarging) {
            cylinderSize.x -= 0.02
            cylinderSize.y -= 0.02
            cylinderSize.z -= 0.02
            document.querySelector("a-cylinder").setAttribute('scale', cylinderSize)
        }
        if(cylinderSize.x >= 3.5) {
            enlarging = 0
        }
        if(cylinderSize.x <= 1) {
            enlarging = 1
        }
    }, 50)

}