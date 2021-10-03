let api = {
    key: '532514bd986e15e11e508ebdb0637aff',
    baseurl : 'https://api.openweathermap.org/data/2.5/'
}

let search_box = document.querySelector('header input');
search_box.addEventListener('keypress',setQuery)

function setQuery(e){
    
    if(e.keyCode == 13){
        getResult(search_box.value);
        console.log(search_box.value);
    }
}

function getResult(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather)=>{
        return weather.json()
    })
    .then(displayResults);
}
function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let data = document.querySelector('.data');
    data.innerHTML = dataBuilder(now);
    let temp = document.querySelector('.temp');
     temp.innerHTML = `${Math.floor(weather.main.temp)}°<span>C</span>`;

     let Fog = document.querySelector('.fog')
     Fog.innerHTML = weather.weather[0].main;

     let current = document.querySelector('.current');
     current.innerHTML = `${Math.floor(weather.main.temp_min)}°C / ${Math.floor(weather.main.temp_max)}°C`;
    
}
function dataBuilder(arg){
    let months = [
        'Januar',
        'Februar',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'];
    
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    let day = days[arg.getDay()];
    let date = arg.getDate();
    let month = months[arg.getMonth()];
    console.log(arg.getMonth());
    let year = arg.getFullYear();

    return `${day} ${date} ${month} ${year}` 
}
