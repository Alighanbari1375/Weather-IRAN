document.getElementById('resullte').addEventListener('click', function () {
    const city = document.getElementById('input-text').value;
    const apiKey = "10e19306ca0c4757a9d194225250301";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('شهر پیدا نشد');
            }
            return response.json();
        })
        .then(data => {
            console.log(JSON.stringify(data));
            // const temp = data.main.temp;
            // const cityName = data.name + ', ' + data.sys.country;
            // const weatherDescription = data.weather[0].description;
            // document.getElementById('num1').innerText = `${temp}°`;
            // document.getElementById('cityName').innerText = cityName;
            // document.getElementById('weatherDescription').innerText = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
        })
        .catch(error => {
            document.getElementById('num1').innerText = 'خطا: ' + error.message;
            document.getElementById('cityName').innerText = '';
            document.getElementById('weatherDescription').innerText = '';
        });
});
