
let botonresta=document.getElementById("a1");
boton.addEventListener("click", respuestaClick);
function respuestaClick(){
    let sulipanta=document.createElement("div");
sulipanta.innerHTML= `<br> \n <video src="asset/video/video.mp4" autoplay height="500px" width="auto"  ></video>`;    
document.body.append(sulipanta);