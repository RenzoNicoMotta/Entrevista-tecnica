const apiKey = "f5d326a604d6127969eaa8d27b0022ee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&q=";
const buscar = document.querySelector(".buscar input");
const buscarbtn = document.querySelector(".buscar button");
const imgclima = document.querySelector(".clima-icon");
const vidClima = document.querySelector(".video");
const card = document.querySelector(".card");
const ultimaCiudad = localStorage.getItem("ciudad");

async function checkweather(ciudad){
    const response = await fetch(apiUrl + ciudad + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".clima").style.display = "none"
    }else{
        var data = await response.json();
        
        
        document.querySelector(".ciudad").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
        document.querySelector(".sensacion").innerHTML = "Sensacion Terminca " + Math.round(data.main.feels_like) + "°c";
        document.querySelector(".min").innerHTML = "Temperatura minima: " + Math.round(data.main.temp_min) + "°c";
        document.querySelector(".max").innerHTML = "Temperatura maxima: " + Math.round(data.main.temp_max) + "°c";
        document.querySelector(".presion").innerHTML = data.main.pressure;
        document.querySelector(".humedad").innerHTML = data.main.humidity + " %";
        document.querySelector(".viento").innerHTML = data.wind.speed + "km/h";
        console.log(data)
        if(data.weather[0].main == "Clear"){
            imgclima.src = "images/despejado.png"
        } else if(data.weather[0].main == "Clouds"){
            imgclima.src = "images/nublado.png"
        } else if(data.weather[0].main == "Drizzle"){
            imgclima.src = "images/lluvioso.png"
        } else if(data.weather[0].main == "Mist"){
            imgclima.src = "images/neblina.png"
        } else if(data.weather[0].main == "Rain"){
            imgclima.src = "images/lloviendo.png"
        } else if(data.weather[0].main == "Snow"){
            imgclima.src = "images/nevando.png"
        } 
    
        if(data.weather[0].main == "Clear"){
            vidClima.src = "https://www.youtube.com/embed/fUfum4MC22Q"
        } else if(data.weather[0].main == "Clouds"){
            vidClima.src = "https://www.youtube.com/embed/Etr7gWM3sX8"
        } else if(data.weather[0].main == "Drizzle"){
            vidClima.src = "https://www.youtube.com/embed/KXkkKm4AwBg"
        } else if(data.weather[0].main == "Mist"){
            vidClima.src = "https://www.youtube.com/embed/wlgClFPZg6w"
        } else if(data.weather[0].main == "Rain"){
            vidClima.src = "https://www.youtube.com/embed/KXkkKm4AwBg"
        } else if(data.weather[0].main == "Snow"){
            vidClima.src = "https://www.youtube.com/embed/kGJr1Nh-1CY"
        } 

        if(data.weather[0].main == "Clear"){
            card.style = "background: linear-gradient(to bottom, #e9c46a, #f4a261, #E76F51);"
        } else if(data.weather[0].main == "Clouds"){
            card.style = "background: linear-gradient(to bottom, #6c757d, #adb5bd, #ced4da);"
        } else if(data.weather[0].main == "Drizzle"){
            card.style = "background: linear-gradient(to bottom, #90e0ef, #ade8f4, #caf0f8);"
        } else if(data.weather[0].main == "Mist"){
            card.style = "background: linear-gradient(to bottom, #cce3de, #eaf4f4, #f6fff8);"
        } else if(data.weather[0].main == "Rain"){
            card.style = "background: linear-gradient(to bottom, #e0e1dd, #778da9, #415a77);"
        } else if(data.weather[0].main == "Snow"){
            card.style = "background: linear-gradient(to bottom, #243dbb, #789fd6, #cffffc);"
        } 


        document.querySelector(".clima").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

   
}
buscarbtn.addEventListener("click", () => {
    const ciudad = buscar.value;
    checkweather(ciudad);
    localStorage.setItem("ciudad", ciudad);
  });

if (ultimaCiudad) {
  checkweather(ultimaCiudad);
}

