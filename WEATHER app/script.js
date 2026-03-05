// let city = document.getElementById("cityinput").value;
// console.log(city);
apikey="ce2fcccaed81c5a28acbfa0de12846fb";
document.querySelector(".searchbtn").addEventListener("click", function() {
    let city = document.getElementById("cityinput").value;
    console.log(city);

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

console.log(url);
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    document.getElementById("cityname").innerText = data.name;
    document.getElementById("temperature").innerText = data.main.temp + "°C";
    document.getElementById("weathericon").src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("description").innerText = data.weather[0].description;

});
console.log(data.main.temp);
console.log(data.main.humidity);
console.log(data.weather[0].description);

});

