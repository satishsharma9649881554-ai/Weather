let input = document.querySelector("input")
let btn = document.querySelector("button")
let div = document.querySelector("#container")
let temp = document.createElement("p");
let main = document.createElement("p");
let humiditys = document.createElement("p");
let mainWeather = document.createElement("h1");



let city = document.createElement("h3")
 btn.addEventListener("click",async function(){

    try{
let url =  await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=f48d5d8e8b3d20cb879db3a69b560ad8&units=metric`)

let data = await url.json();
   console.log(data);
 if (data.cod !== "200") {
      removediv();
      city.innerText = `Error: ${data.message}`;
      city.style.fontSize = "20px";
      city.style.position = "absolute";
      city.style.left = "50px";
      city.style.top = "50px";
      city.style.transform = "translate(-50%,-50%)";
      document.body.appendChild(city);
      return;
    }





   
    removediv();
     cityName(data)
   add(data)
   checkhumity(data)
   checkweather(data)
    saveDB(data);
    }catch(error) {
        console.log(error);
        
    }


   
// url.then((res)=>{
//    return res.json();
   
    
// }).then((data)=>{
//     console.log(data);
    
//      console.log(data.list[1].main.humidity)
//      console.log(data.list[0].weather[0].main)
//       saveDB(data);
//      checkweather(data)
//       add(data);
//       cityName();
//       checkhumity(data)
      
     
//      let weathers = data.list[0].weather[0].main;
//      console.log(data.list[2])    
     
// }).then((data)=>{
//      cityName();
//       checkhumity(data)
//       checkweather(data)
// })
// .catch((e)=>{
//     console.log(e)
// })

  })

  async function saveDB(data){
   
        let weatherCondition = data.list[0].weather[0].main;
    if(weatherCondition === "Clouds"){
        document.body.style.backgroundImage = `url("clouds.jpg")`;
        
        
       
    }else if(weatherCondition === "Rain"){
         document.body.style.backgroundImage = `url("rains.jpg")`;
           

    }else if(weatherCondition === "Clear"){
           document.body.style.backgroundImage = `url("sun.jpg")`;
             

    }


    
}

async function removediv(){
    
    div.remove();

}

 async function add(data){
    setTimeout(()=>{
         let temppures = data.list[1].main.temp;
    temp.innerHTML = `<p>Tempture : ${temppures}</p>`
   
    temp.style.fontSize = "30px";
    temp.style.position = 'absolute';
     temp.style.left = '140px';
    temp.style.top = '205px';
   

    document.body.appendChild(temp);

    },2000)
   

}



 async function cityName(){
    setTimeout(()=>{
         city.innerText = `Location: ${input.value}`
    city.style.fontSize = "20px";
    city.style.position = 'absolute';
     city.style.left = '30px';
    city.style.top = '30px';
    
    document.body.appendChild(city);
    console.log(input.value);

    },2000)
   

}



 async function checkhumity(data){
    setTimeout(() => {
  let hum = data.list[1].main.humidity;
    console.log(hum);
    humiditys.innerText = `Humidity: ${hum}% `; 
    humiditys.style.fontSize = "30px";
    humiditys.style.position = 'absolute';
     humiditys.style.left = '140px';
    humiditys.style.top = '200px';
   
    document.body.appendChild(humiditys);
        
    },2000);
}
 async function checkweather(data){
    setTimeout(()=>{
        let weatherCondition = data.list[0].weather[0].main;
    mainWeather.innerText = `Weather: ${weatherCondition}`
    
    mainWeather.style.fontSize = "30px";
    mainWeather.style.position = 'absolute';
     mainWeather.style.left = '140px';
    mainWeather.style.top = '280px';
  
    mainWeather.style.color = "orange";

    document.body.appendChild(mainWeather);

    },2000)

}



