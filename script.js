let cityText = document.querySelector("#city")
cityText.value = localStorage.getItem("")


cityText.addEventListener("click", event => {
    localStorage.setItem("cityPicked", cityText.value)
})