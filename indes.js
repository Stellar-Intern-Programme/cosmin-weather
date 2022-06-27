
function onInputChange(event){
    const photo = event.target.value
    const backgroundDiv = document.getElementById("background")
    const defaultImage = document.querySelector(".defaultImage")
     backgroundDiv.removeChild(defaultImage)
    backgroundDiv.style.backgroundImage = `url('${photo}')`
    backgroundDiv.style.backgroundSize = `cover`
    backgroundDiv.style.backgroundRepeat = `none`

}
function modal(){   
    const photoInput = document.getElementById("photoUrl")
    photoInput.addEventListener("change", onInputChange)
    const modal=document.getElementById("modal")
    modal.style.display = "flex"


}
function add(){
    const city = document.getElementById("cityname").value
    const photo = document.getElementById("photoUrl").value
    const oras = document.createElement("div")
    oras.className= "big_picture"   
       const text = document.createElement("a")
      const image = document.createElement("img")
      text.innerHTML=city
      image.setAttribute("src",photo)
    oras.appendChild(image)
    oras.appendChild(text)
    document.getElementById("containerpoze").appendChild(oras)
    const modal=document.getElementById("modal")
    modal.style.display = "none"
}

