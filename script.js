// let cityText = document.querySelector("#city")
var apiKey = "87a2395ae016387129a6f6925899740f";
// cityText.value = localStorage.getItem("")


function citySearch (event) {
    event.preventDefault ();

    var city = document.getElementById("city").value;
    console.log(city)
    getWeatherAPI(city);
}

var btn1 = document.getElementById("btn");
btn1.addEventListener("click", citySearch);

const currentDay = document.querySelector ("#currentDay")



function getWeatherAPI(city){
    var getURL = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    console.log(getURL);
   fetch(getURL)
   .then(function (response) {
    return response.json();
     })
     .then (function (data){
        console.log(data.main.temp);
        const newLI = document.createElement('LI');
        newLI.append(data.main.temp);
        currentDay.append(newLI)

        
     })
    // $('#currentDay').empty();

  
   }
// )};



//    .catch((e) => {
//     console.log("Error", e);
//    });

//     var myHeaders = new Headers ();
//     myHeaders.append("weather-key", "87a2395ae016387129a6f6925899740f");
//     myHeaders.append("Content-Type", "application/json");


// // fetch().then(res => res.json()).then(data => {
// //     console.log(data);
// // // })

// // });

// }