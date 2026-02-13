async function getWeather() {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("result");

    if (city === "") {
        resultDiv.innerHTML = "Please enter a city name!";
        return;
    }

    const apiKey = "ee321bf133995ac22f42b31747523461";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            resultDiv.innerHTML = "City not found!";
            return;
        }

        resultDiv.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>🌡 Temperature: ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌥 Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = "Error fetching data!";
    }
}
