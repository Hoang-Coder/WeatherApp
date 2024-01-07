let theme_id = 0
let count_time = 0
const APP_ID = '99d82eb512f190354fcea46473fbee11'
const DEFAULT_VALUE = '--'
const searchInput = document.querySelector("#search-input")
const cityName = document.querySelector(".city-name")
const weatherState = document.querySelector(".weather-state")
const weatherIcon = document.querySelector(".weather-icon")
const temperature = document.querySelector(".temperature")

const morning = document.querySelector(".morn")
const afternoon = document.querySelector(".after")
const evening = document.querySelector(".even")

const sunrise = document.querySelector(".sunrise")
const sunset = document.querySelector(".sunset")
const humidity = document.querySelector(".hudimity")
const windSpeed = document.querySelector(".wind-speed")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appID=${APP_ID}&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json()
        console.log('[Search Input]', data)
        cityName.innerHTML = data.name || DEFAULT_VALUE
        weatherState.innerHTML == data.weather[0].description || DEFAULT_VALUE
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE

        morning.innerHTML = Math.round(data.main.temp_min) || DEFAULT_VALUE
        afternoon.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE
        evening.innerHTML = Math.round(data.main.temp_max) || DEFAULT_VALUE

        sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE
        sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE
        humidity.innerHTML = data.main.humidity || DEFAULT_VALUE
        windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE
    })
searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appID=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json()
            console.log('[Search Input]', data)
            cityName.innerHTML = data.name || DEFAULT_VALUE
            weatherState.innerHTML == data.weather[0].description || DEFAULT_VALUE
            weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE
            sunrise.innerHTML

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE
        })
})

function welcome() {
    setTimeout(function () {
        const mainElements = document.querySelectorAll('main');
        mainElements.forEach((mainElement) => {
            mainElement.style.borderRadius = "40px"
        });
    }, 200)
}
setInterval(function () {
    let currentTime = new Date()
    let formattedDate = currentTime.toLocaleString().replace(",", "")
    let analysisTime = formattedDate.split(" ")
    // console.log(analysisTime);
    // ['12/22/2023', '10:28:37', 'PM']
    // console.log(analysisTime[1].substring(0, 4))
    if (analysisTime[1].length == 8) {
        document.getElementById("time").innerHTML = analysisTime[1].substring(0, 5)
    }
    else if (analysisTime[1].length == 7) {
        document.getElementById("time").innerHTML = analysisTime[1].substring(0, 4)
    }
}, 1000)


let color_mode = () => {
    let background_phone = document.getElementsByClassName("phone")[0]
    let direct_bar = document.getElementsByClassName("navigation")[0]
    let welcome_text = document.getElementsByClassName("welcome_text")[0]
    if (theme_id == 0) {
        document.getElementsByClassName("icon-signal")[0].src = "./img/light/signal.png"
        document.getElementsByClassName("icon-wifi")[0].src = "img/light/wifi.png"
        document.getElementsByClassName("icon-battery")[0].src = "img/light/battery.png"
        welcome_text.style.color = "#fff"
        background_phone.style.background = "#222222"
        background_phone.style.color = "#ffffff"
        direct_bar.style.background = "#f6f9fb"
        theme_id = 1
    }
    else if (theme_id == 1) {
        document.getElementsByClassName("icon-signal")[0].src = "./img/dark/signal.png"
        document.getElementsByClassName("icon-wifi")[0].src = "img/dark/wifi.png"
        document.getElementsByClassName("icon-battery")[0].src = "img/dark/battery.png"
        welcome_text.style.color = "#000"
        background_phone.style.background = "#eee7da"
        direct_bar.style.background = "#000"
        background_phone.style.color = "#000"
        theme_id = 0
    }
}
