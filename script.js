const  time = document.querySelector('.time');
const  greeting = document.querySelector('.greeting');
const  name = document.querySelector('.name');
const  focus = document.querySelector('.focus');
const  weather = document.querySelector('.weather');
const  week = document.querySelector('.week');
const  date = document.querySelector('.date');
const  change = document.querySelector('.change');
const  imgc = document.querySelector('.img');
const  houm = document.querySelector('.city');
const  degrees = document.querySelector('.degrees');
const  hum = document.querySelector('.humidity');
const  speedwind = document.querySelector('.speed');
const weather_false = document.querySelector('.weather-false');

let hourVar = 0;

function getTime (){
  let Date_now = new Date();
  let hour = Date_now.getHours();
  let min = Date_now.getMinutes();
  let sec = Date_now.getSeconds();
  let day = Date_now.getDate();
  let month = Date_now.getMonth();
  let day_of_week = Date_now.getDay();
  let times_of_day;

  switch(month) {
    case 0 : 
        month = 'january';
        break;
    case 1 : 
        month = 'february';
        break;
    case 2 : 
        month = 'march';
        break;
    case 3 : 
        month = 'april';
        break;
    case 4 : 
        month = 'may';
        break;
    case 5 : 
        month = 'june';
        break;
    case 6 : 
        month = 'july';
        break;
    case 7 : 
        month = 'august';
        break;
    case 8: 
        month = 'september';
        break;
    case 9 : 
        month = 'october';
        break;
    case 10 : 
        month = 'november';
        break;
    case 11 : 
        month = 'december';
        break;
  }
  switch(day_of_week) {
    case 0 : 
    day_of_week = 'Sunday';
        break;
    case 1 : 
    day_of_week= 'Monday';
        break;
    case 2 : 
    day_of_week = 'Tuesday';
        break;
    case 3 : 
    day_of_week = 'Wednesday';
        break;
    case 4 : 
    day_of_week = 'Thursday';
        break;
    case 5 : 
    day_of_week = 'Friday';
        break;
    case 6 : 
    day_of_week = 'Saturday';
        break;
  }

  if (hour >=0 && hour < 6) {
    times_of_day = 'Night';
    document.body.style.backgroundImage = `url(assets/images/${arrTime[h(hour,hourVar)]}.jpg)`;
    document.body.style.color = '#b7d4ed';
  }  
  else if (hour >=6 && hour < 12){
    times_of_day = 'Morning';
    document.body.style.backgroundImage = `url(assets/images/${arrTime[h(hour,hourVar)]}.jpg)`;
    document.body.style.color = '#e9f4f7';
  }
  else if (hour >=12 && hour < 18) {
    times_of_day = 'Day';
    document.body.style.backgroundImage = `url(assets/images/${arrTime[h(hour,hourVar)]}.jpg)`;
    document.body.style.color = '#ffffff';
  }
  else if (hour >=18 && hour < 24) {
    times_of_day = 'Evening';
    document.body.style.backgroundImage = `url(assets/images/${arrTime[h(hour,hourVar)]}.jpg)`;
    document.body.style.color = '#ffffff';
  }
   
  hour < 10 ? hour = '0'+ hour : hour;
  min < 10 ? min = '0'+ min : min;
  sec < 10 ? sec = '0'+ sec : sec;

  greeting.innerHTML = `Good ${times_of_day},`;
  week.innerHTML = `${day_of_week},`;
  date.innerHTML = `${day} ${month}`;
  time.innerHTML = hour + ':' + min + ':' + sec;
  setTimeout(getTime,1000);
}

function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
}

function getHoum() {
    if (localStorage.getItem('houm') === null) {
        houm.textContent = '[Enter Houm]';
      } else {
        houm.textContent = localStorage.getItem('houm');
      }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
}

houm.addEventListener('focus',function(e){
    e.target.innerText = '';
});
houm.addEventListener('blur',houmBlur);

name.addEventListener('focus',function(e){
    e.target.innerText = '';
});

name.addEventListener('blur',nameBlur);

focus.addEventListener('focus',function(e){
    e.target.innerText = '';
});

focus.addEventListener('blur',focusBlur);

function nameBlur(e){
    e.target.innerText === '' ? 
    e.target.innerText = localStorage.getItem('name') :
    localStorage.setItem('name', e.target.innerText);
}

function focusBlur(e){
    e.target.innerText === '' ? 
    e.target.innerText = localStorage.getItem('focus') :
    localStorage.setItem('focus', e.target.innerText);
}
function houmBlur(e){
   if( e.target.innerText === ''){
       e.target.innerText = localStorage.getItem('houm') ;
   } 
    else {
        localStorage.setItem('houm', e.target.innerText);
        weater();
    }
    
    
}
name.addEventListener('keypress',function (e){
    if (e.which == 13 || e.keyCode == 13) {
        name.blur();
    }
});

focus.addEventListener('keypress',function (e){
    if (e.which == 13 || e.keyCode == 13) {
        focus.blur();
    }
});

houm.addEventListener('keypress',function (e){
    if (e.which == 13 || e.keyCode == 13) {
        houm.blur();
        weater();
    }
});

const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

const arrNight =   ['00','01','02','03','04','05'];
const arrMorning = ['06','07','08','09','10','11'];
const arrDay =     ['12','13','14','15','16','17'];
const arrEvening = ['18','19','20','21','22','23'];
shuffle(arrNight);
shuffle(arrMorning);
shuffle(arrDay);
shuffle(arrEvening);
const arrTime = arrNight.concat(arrMorning,arrDay,arrEvening)

let h = function (a,b) {
  let res = a + b; 
  res >= 24 ? res -= 24 : res;
  return res; 
}

change.addEventListener('click',function(){
    hourVar++
});
change.addEventListener('contextmenu',function() {
    hourVar = 0;
    event.preventDefault()
});
window.onload=getTime;
getName();
getFocus();
getHoum();
function weater(){
    let city = (localStorage.getItem('houm')).toLowerCase()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6237af8cbd171f8d4bc913e21a676ec`) 
    .then(resp => resp.json())
    .then(function(data){
        degrees.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        hum.textContent = `φ = ${data.main.humidity}%`;
        speedwind.textContent = `s = ${data.wind.speed} м/с`;
        imgc.innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png" border="1px">';
        weather_false.style.display = 'none';
    })
    .catch(function(){
        weather_false.style.display = 'block';
    });
}
weater();
