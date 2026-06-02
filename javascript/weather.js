const resultElement = document.querySelector(".weatherT")

fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,wind_speed_10m&timezone=Asia%2FTokyo&past_days=0&forecast_days=7")
    .then(response => response.json())
    .then(json => {
        console.log(json)
        
        const { current, timezone, time, latitude} = json
 
        const raint = current.rain === 1 ? "да" : "нет";
        const dayNightText = current.is_day === 1 ? "день" : "ночь";

        resultElement.innerHTML = `
            <div class="cityN">${timezone}</div>
            <div class="infoTime">СЕГОдня в токио ${current.time}</div>
            <div class="info">
                <div class="infoWT">темперетура: ${current.temperature_2m} °C</div>
                <div class="infoSW">скорость ветра: ${current.wind_speed_10m} м/сек</div>
                <div class="infoRain"> дождь: ${raint}</div>
                <div class="infoDay">сейчас на улице: ${dayNightText}</div>
            </div>
        `
    })
      