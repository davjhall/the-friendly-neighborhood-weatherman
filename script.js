
var apiKey = "87a2395ae016387129a6f6925899740f";
const cityStorage = document.querySelector("#city");
var weatherCity = localStorage.getItem("weatherCity");
if(weatherCity) {
    document.getElementById("city").value = weatherCity;
}


cityStorage.addEventListener("click", event =>{
    console.log
})

function citySearch(event) {
    event.preventDefault();

    var city = document.getElementById("city").value;
    localStorage.setItem("weatherCity", city);

    getWeatherAPI(city);
}

var btn1 = document.getElementById("btn");
btn1.addEventListener("click", citySearch);

const currentDay = document.querySelector("#currentDay")
const currentDayWind = document.querySelector("#currentDayWind")
const fiveDayDiv = document.querySelector(".fiveDay")
const errorMsg = document.querySelector("#errorMsg")

function getWeatherAPI(city) {
    var getURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    console.log(getURL);
    fetch(getURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            const newLI = document.createElement('LI');
            newLI.append("Temp: " + data.main.temp);
            currentDay.append(newLI)

            const newLI1 = document.createElement('LI')
            newLI1.append("Wind: " + data.wind.speed + " MPH");
            currentDay.append(newLI1)

            const newLI2 = document.createElement('LI')
            newLI2.append("Humidity: " + data.main.humidity);
            currentDay.append(newLI2)

            getFiveDay(data.coord.lat, data.coord.lon)
        })
        .catch(function(error){
            console.log(error);
            localStorage.clear();
            errorMsg.style.display = "block"
        })




}


function getFiveDay(lat, lon) {
    var getURL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    console.log(getURL2);

    fetch(getURL2)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)

            const newLi = document.createElement('LI');

            currentDayWind.append(newLi)
            var listArray = data.list
            console.log(data.list)
            for (var i = 1; i < 6; i++) {
                var date = new Date();
                var next_date = new Date(date.setDate(date.getDate() + i));
                var formatted = next_date.toISOString().split('T')[0]
                    var weatherObj = listArray.find(x => x.dt_txt.includes(formatted));
                    if (weatherObj) {
                        var dateString = new Date(weatherObj.dt_txt)
                        $('.card-title' + i).text(dateString.toLocaleDateString())
                        $('.card-text' + i).text("Temp in Degrees: " + weatherObj.main.temp);
                        $('.card-txt' + i).text("Wind Speed in mph: " + weatherObj.wind.speed);
                        $('.card-t' + i).text("Humidity: " + weatherObj.main.humidity);
                       $(".card-" + i).removeClass('visually-hidden');
                        
                        
                    }
            }
           
        })
}


// let today = new Date().toLocaleDateString() only called when api is called