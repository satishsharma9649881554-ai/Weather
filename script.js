let input = document.querySelector("input")
let btn = document.querySelector("button")
let div = document.getElementById("container");



let mainWeather = document.createElement("h1");
 




 btn.addEventListener("click",async function(){

    try{
let url =  await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=f48d5d8e8b3d20cb879db3a69b560ad8&units=metric`)

let data = await url.json();
    if(data.cod != 200) {
        alert("City not found")
    }
     removediv();
     createdata(data);
    saveDB(data);
    
    }catch(error) {
        console.log(error);
        
    }

  })

  function saveDB(data){
   let weatherCondition = data.list[0].weather[0].main;
   if(weatherCondition === "Clouds"){
        document.body.style.backgroundImage = `url("clouds.jpg")`;
    }else if(weatherCondition === "Rain"){
         document.body.style.backgroundImage = `url("rains.jpg")`;
    }else if(weatherCondition === "Clear"){
           document.body.style.backgroundImage = `url("sun.jpg")`;  

    }
    
}
 function createdata(data) {

    let newdiv = document.createElement("div")
      newdiv.classList.add("newdiv")
    let date = new Date();
    let p = document.createElement("p")
    p.classList.add("p");
    p.innerText = `current weather 
    ${date.toDateString()}`;
    newdiv.appendChild(p)
     document.body.appendChild(newdiv);


     let temp = document.createElement("p");
     temp.classList.add("temp");
       let temperature = data.list[1].main.temp;
      
       
       
      temp.innerHTML = `<h1>${temperature}°c</h1>`
   
   newdiv.appendChild(temp);

  let sunrise = document.createElement("p");
  sunrise.classList.add("sunrise")
     let sunriseTime = data.city.sunrise;
     let localdate = new Date(sunriseTime*1000);
     sunrise.innerText = `sunrise at
     ${localdate.toLocaleTimeString()}`
     newdiv.appendChild(sunrise)


      let sunset = document.createElement("p");
  sunset.classList.add("sunset")
     let sunsetTime = data.city.sunset;
   
     let localsunset = new Date(sunsetTime*1000);
     sunset.innerText = `sunset at
     ${localsunset.toLocaleTimeString()}`
     newdiv.appendChild(sunset)

     
    
   let humiditys = document.createElement("p");
     humiditys.classList.add("humiditys");

     let hum = data.list[1].main.humidity;
    humiditys.innerText = `Humidity
     ${hum}% `; 
  

    newdiv.appendChild(humiditys);


    let city = document.createElement("h2");
    city.classList.add("city");
    let country = data.city.country
   

      city.innerText = `Location : ${input.value} (${country})`;
      newdiv.appendChild(city);

      let main = document.createElement("p");
      main.classList.add("main");

  let weatherCondition = data.list[0].weather[0].description;
  
    main.innerText = `${weatherCondition}`
    
   
    newdiv.appendChild(main);


    let image = document.createElement("img");
    image.classList.add("image")
    let icons = data.list[0].weather[0].icon;
    let openicons = `https://openweathermap.org/img/wn/${icons}@2x.png`;
    image.src = openicons;
    newdiv.appendChild(image)


    let windSpeed = document.createElement("p")
    windSpeed.classList.add("windspeed")
    let wind = data.list[0].wind.speed;
      windSpeed.innerText = `wind speed
      ${wind} kph`;
     newdiv.appendChild(windSpeed)
   

     let rainProblity = document.createElement("p")
     p.classList.add("rainproblity")
     let pop = data.list[0].pop;
       rainProblity.innerText = `chance of rain
       ${pop*100}%`;
       rainProblity.style.fontSize = "20px";
       rainProblity.style.margin = "20px";
     newdiv.appendChild(rainProblity)
     


    
    
}

   function removediv(){
    
    div.remove();

}

 



 




 