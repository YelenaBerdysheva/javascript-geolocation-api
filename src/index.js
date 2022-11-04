let apiKey = "e6c2364656962bdcb16bc352fc42569a"

function showPosition (position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

  axios.get(apiUrl)
    .then(function (response) {
      let temperature = response.data.main.temp
      document.querySelector("h1").innerHTML = `Current temperature is ${temperature}&#8451; `
    })
}
navigator.geolocation.getCurrentPosition(showPosition);
