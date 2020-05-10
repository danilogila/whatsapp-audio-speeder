const buttonClassName = "btn-speed"

function increaseAudioRate (){
      let playbackRate = 1;
  
      return function(event) {
        let audios = document.querySelectorAll("audio")

        if (audios.length === 0){
          playbackRate = 1;
          return
        }

        playbackRate += 0.5;
        if (playbackRate > 3.0){
          playbackRate = 1
        }

        document.getElementsByClassName(buttonClassName)[0].innerText = `${playbackRate} X`
        audios.forEach((audio) =>{
          audio.playbackRate = playbackRate
        })
      };
  }


let interval = setInterval(() => {
  let actionsMenu = document.querySelector("header")

  if(actionsMenu){
    let menu = actionsMenu.childNodes[1].firstChild
 
    clearInterval(interval)

    const button = document.createElement("button")
    button.classList.add(buttonClassName)
    button.innerHTML = "1 X"
    menu.appendChild(button)

    button.onclick = (increaseAudioRate)()
  }
}, 1000);