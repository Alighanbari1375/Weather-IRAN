
document.getElementById('resullte').addEventListener('click', function() {
    const city = document.getElementById('input-text').value;
    const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('شهر پیدا نشد');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const cityName = data.name + ', ' + data.sys.country;
            const weatherDescription = data.weather[0].description;

            document.getElementById('num1').innerText = `${temp}°`;
            document.getElementById('cityName').innerText = cityName;
            document.getElementById('weatherDescription').innerText = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
        })
        .catch(error => {
            document.getElementById('num1').innerText = 'خطا: ' + error.message;
            document.getElementById('cityName').innerText = '';
            document.getElementById('weatherDescription').innerText = '';
        });
});