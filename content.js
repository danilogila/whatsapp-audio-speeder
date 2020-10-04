const buttonClassName = "btn-speed"

function increaseAudioRate (){
      let playbackRatePosition = 1;

      let playbackRate = {
        "1": 1,
        "2": 1.5,
        "3": 1.75,
        "4": 2,
        "5": 2.5,
        "6": 3
      }
  
      return function(event) {
        let audios = document.querySelectorAll("audio")

        if (audios.length === 0){
          playbackRatePosition = 1;
          return
        }

        playbackRatePosition += 1;
        if (playbackRatePosition > 6){
          playbackRatePosition = 1
        }

        document.getElementsByClassName(buttonClassName)[0].innerText = `${playbackRate[playbackRatePosition]} X`
        audios.forEach((audio) =>{
          audio.playbackRate = playbackRate[playbackRatePosition]
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