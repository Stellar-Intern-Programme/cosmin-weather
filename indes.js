const arrayOfCities = JSON.parse(localStorage.getItem("city")) || []

window.addEventListener('load', event => {

    render()



})
function onInputChange(event) {
    const photo = event.target.value
    const backgroundDiv = document.getElementById("background")
    const defaultImage = document.querySelector(".defaultImage")
    backgroundDiv.removeChild(defaultImage)
    backgroundDiv.style.backgroundImage = `url('${photo}')`
    backgroundDiv.style.backgroundSize = `cover`
    backgroundDiv.style.backgroundRepeat = `none`
    let imgContent = document.getElementById("containerpoze")
}
function openModal() {
    //<img src="src/imagne.svg" alt="image" class="defaultImage" />
    const photoInput = document.getElementById("photoUrl")
    photoInput.addEventListener("input", onInputChange)
    const modal = document.getElementById("modal")
    modal.style.display = "flex"
    const img = document.createElement("img")
    img.className = "defaultImage"
    img.setAttribute("src", `src/imagne.svg`)
    const poza = document.querySelector(".serarch3")
    poza.appendChild(img)
    
}
function add() {
    const cityName = document.getElementById("cityname")
    const photoUrl = document.getElementById("photoUrl") 
    arrayOfCities.push({ city :cityName.value, url :photoUrl.value })
    localStorage.setItem("city", JSON.stringify(arrayOfCities))
    closeModal()
    render()
    cityName.value=""
    photoUrl.value=""

}
function closeModal() {
    const modal = document.getElementById("modal")
    modal.style.display = "none"

}


function render() {
    containerpoze.innerHTML = ""
    arrayOfCities.forEach((item)=>{
        const oras = document.createElement("div")
        oras.addEventListener( "click", () => {
            selectCity(item)
        })
        oras.className = "big_picture"
        const text = document.createElement("a")
        const image = document.createElement("img")
        text.innerHTML = item.city
        image.setAttribute("src", item.url)
        oras.appendChild(image)
        oras.appendChild(text)
        document.getElementById("containerpoze").appendChild(oras)
    })

}
function selectCity(city){
    console.log(city)
const location = document.getElementById("location")
location.innerHTML = city.city


}
