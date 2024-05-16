//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', fetchAll);

let date;
let date2; // Next 5 days of forecast for free api version
let date3;
let date4;
let date5;
let date6;

function fetchAll(){
  getFetchHere();
  getFetchThere();
}

//fetch
function getFetchHere(){
  const key = 'YOUR_API_Key';
  const choice = document.querySelector('.hereInput').value
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${choice}&days=7&aqi=no`

  // Fetching from weatherapi.com
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // Date to use for forecast
        date = new Date();
        date2 = new Date(date);
        date2.setDate(date.getDate()+1); // Add a day to the previous date
        date3 = new Date(date2);
        date3.setDate(date2.getDate()+1);        
        date4 = new Date(date3);
        date4.setDate(date3.getDate()+1);        
        date5 = new Date(date4);
        date5.setDate(date4.getDate()+1);       
        date6 = new Date(date5);
        date6.setDate(date5.getDate()+1);
        
        date2 = date2.toString().split(' ')[0]; //Pull out the abbreviated day of week
        date3 = date3.toString().split(' ')[0];
        date4 = date4.toString().split(' ')[0];
        date5 = date5.toString().split(' ')[0];
        date6 = date6.toString().split(' ')[0];
        
        //Set forecast dates
        document.querySelector('.hereDate2').innerHTML = date2;
        document.querySelector('.hereDate3').innerHTML = date3;
        document.querySelector('.hereDate4').innerHTML = date4;
        document.querySelector('.hereDate5').innerHTML = date5;
        document.querySelector('.hereDate6').innerHTML = date6;


        //Setting here location items
        document.querySelector('.hereLocation').innerHTML = data.location.name;
        document.querySelector('.hereCondition').innerHTML = data.current.condition.text + " - Wind: " + data.current.wind_mph + "mph";
        document.querySelector('.hereTemp').innerHTML = Math.floor(data.current.temp_f) + '°';
        
        //Setting the icon
        if(data.current.condition.text == 'Partly cloudy'){
          document.querySelector('.hereIcon').src = `D:/Programming/100Devs/HereToThere/js/icons/partlyCloudy.png`;
        } else if(data.current.condition.text == 'Sunny' || data.current.condition.text == 'Clear'){
          document.querySelector('.hereIcon').src = `D:/Programming/100Devs/HereToThere/js/icons/sun.png`;
        } else if(data.current.condition.text == 'Overcast'){
          document.querySelector('.hereIcon').src = `D:/Programming/100Devs/HereToThere/js/icons/clouds.png`;
        } else if(data.current.condition.text == 'Patchy light rain with thunder' || data.current.condition.text == 'Light rain' || data.current.condition.text == 'Moderate or heavy rain with thunder'){
          document.querySelector('.hereIcon').src = `D:/Programming/100Devs/HereToThere/js/icons/rain.png`;
        }


        //Setting Forecast High/Low Temps
        let highDate2 = data.forecast.forecastday[0].day.maxtemp_f;
        let highDate3 = data.forecast.forecastday[1].day.maxtemp_f;
        let highDate4 = data.forecast.forecastday[2].day.maxtemp_f;
        let highDate5 = data.forecast.forecastday[3].day.maxtemp_f;
        let highDate6 = data.forecast.forecastday[4].day.maxtemp_f;

        document.querySelector('.hereHighDate2').innerHTML = Math.floor(highDate2) + '°';
        document.querySelector('.hereHighDate3').innerHTML = Math.floor(highDate3) + '°';
        document.querySelector('.hereHighDate4').innerHTML = Math.floor(highDate4) + '°';
        document.querySelector('.hereHighDate5').innerHTML = Math.floor(highDate5) + '°';
        document.querySelector('.hereHighDate6').innerHTML = Math.floor(highDate6) + '°';

        let lowDate2 = data.forecast.forecastday[0].day.mintemp_f;
        let lowDate3 = data.forecast.forecastday[1].day.mintemp_f;
        let lowDate4 = data.forecast.forecastday[2].day.mintemp_f;
        let lowDate5 = data.forecast.forecastday[3].day.mintemp_f;
        let lowDate6 = data.forecast.forecastday[4].day.mintemp_f;
      
        document.querySelector('.hereLowDate2').innerHTML = Math.floor(lowDate2) + '°';
        document.querySelector('.hereLowDate3').innerHTML = Math.floor(lowDate3) + '°';
        document.querySelector('.hereLowDate4').innerHTML = Math.floor(lowDate4) + '°';
        document.querySelector('.hereLowDate5').innerHTML = Math.floor(lowDate5) + '°';
        document.querySelector('.hereLowDate6').innerHTML = Math.floor(lowDate6) + '°';
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//fetch
function getFetchThere(){
  const key = 'YOUR_API_KEY';
  const choice = document.querySelector('.thereInput').value
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${choice}&days=7&aqi=no`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // Date to use for forecast
        date = new Date();
        date2 = new Date(date);
        date2.setDate(date.getDate()+1); // Add a day to the previous date
        date3 = new Date(date2);
        date3.setDate(date2.getDate()+1);        
        date4 = new Date(date3);
        date4.setDate(date3.getDate()+1);        
        date5 = new Date(date4);
        date5.setDate(date4.getDate()+1);       
        date6 = new Date(date5);
        date6.setDate(date5.getDate()+1);
        
        date2 = date2.toString().split(' ')[0]; //Pull out the abbreviated day of week
        date3 = date3.toString().split(' ')[0];
        date4 = date4.toString().split(' ')[0];
        date5 = date5.toString().split(' ')[0];
        date6 = date6.toString().split(' ')[0];
        
        //Set forecast dates
        document.querySelector('.thereDate2').innerHTML = date2;
        document.querySelector('.thereDate3').innerHTML = date3;
        document.querySelector('.thereDate4').innerHTML = date4;
        document.querySelector('.thereDate5').innerHTML = date5;
        document.querySelector('.thereDate6').innerHTML = date6;


        //Setting here location items
        document.querySelector('.thereLocation').innerHTML = data.location.name;
        document.querySelector('.thereCondition').innerHTML = data.current.condition.text + " - Wind: " + data.current.wind_mph + "mph";
        document.querySelector('.thereTemp').innerHTML = Math.floor(data.current.temp_f) + '°';
        
        //Setting the icon
        if(data.current.condition.text == 'Partly cloudy'){
          document.querySelector('.thereIcon').src = `D:/Programming/100Devs/HereToThere/js/icons/partlyCloudy.png`;
          document.querySelector('.menLink').href = `https://www.amazon.com/s?k=mens+light+clothing&rh=p_90%3A8308921011&dc&crid=E8LG34WIA1EB&qid=1714863925&rnid=8308919011&sprefix=mens+light+clothin%2Caps%2C143&ref=sr_nr_p_90_2&ds=v1%3A3J9mEzAydW9SlHuLmtsiGT9p7AAJEVEjbhCzXRPdIS8`
          document.querySelector('.womenLink').href = `https://www.amazon.com/s?k=womens+light+clothing&rh=p_90%3A8308921011&dc&crid=1F9V495CRACQF&qid=1715885631&rnid=8308919011&sprefix=womens+light+clothing%2Caps%2C153&ref=sr_nr_p_90_2&ds=v1%3AObSUB3HiUO%2BPzJuTSD1OW1ky0mFBp%2BeebMXL2IsI6qE`
          document.querySelector('.childrenLink').href = `https://www.amazon.com/s?k=children+light+clothing&rh=p_90%3A8308921011&dc&crid=YCU4K3I0RGPA&qid=1715885731&rnid=8308919011&sprefix=children+light+clothing%2Caps%2C126&ref=sr_nr_p_90_2&ds=v1%3AVMBkX0u50hLpj9gMKPnZ8YMsFVlPJPNbhO5ankzbBiU`
        } else if(data.current.condition.text == 'Sunny' || data.current.condition.text == 'Clear'){
          document.querySelector('.thereIcon').src = `D:/Programming/100Devs/HereToThere/js/icons/sun.png`;
          document.querySelector('.menLink').href = `https://www.amazon.com/s?k=mens+light+clothing&rh=p_90%3A8308921011&dc&crid=E8LG34WIA1EB&qid=1714863925&rnid=8308919011&sprefix=mens+light+clothin%2Caps%2C143&ref=sr_nr_p_90_2&ds=v1%3A3J9mEzAydW9SlHuLmtsiGT9p7AAJEVEjbhCzXRPdIS8`
          document.querySelector('.womenLink').href = `https://www.amazon.com/s?k=womens+light+clothing&rh=p_90%3A8308921011&dc&crid=1F9V495CRACQF&qid=1715885631&rnid=8308919011&sprefix=womens+light+clothing%2Caps%2C153&ref=sr_nr_p_90_2&ds=v1%3AObSUB3HiUO%2BPzJuTSD1OW1ky0mFBp%2BeebMXL2IsI6qE`
          document.querySelector('.childrenLink').href = `https://www.amazon.com/s?k=children+light+clothing&rh=p_90%3A8308921011&dc&crid=YCU4K3I0RGPA&qid=1715885731&rnid=8308919011&sprefix=children+light+clothing%2Caps%2C126&ref=sr_nr_p_90_2&ds=v1%3AVMBkX0u50hLpj9gMKPnZ8YMsFVlPJPNbhO5ankzbBiU`
        } else if(data.current.condition.text == 'Overcast'){
          document.querySelector('.thereIcon').src = `D:/Programming/100Devs/HereToThere/js/icons/clouds.png`;
          document.querySelector('.menLink').href = `https://www.amazon.com/s?k=mens+light+clothing&rh=p_90%3A8308921011&dc&crid=E8LG34WIA1EB&qid=1714863925&rnid=8308919011&sprefix=mens+light+clothin%2Caps%2C143&ref=sr_nr_p_90_2&ds=v1%3A3J9mEzAydW9SlHuLmtsiGT9p7AAJEVEjbhCzXRPdIS8`
          document.querySelector('.womenLink').href = `https://www.amazon.com/s?k=womens+light+clothing&rh=p_90%3A8308921011&dc&crid=1F9V495CRACQF&qid=1715885631&rnid=8308919011&sprefix=womens+light+clothing%2Caps%2C153&ref=sr_nr_p_90_2&ds=v1%3AObSUB3HiUO%2BPzJuTSD1OW1ky0mFBp%2BeebMXL2IsI6qE`
          document.querySelector('.childrenLink').href = `https://www.amazon.com/s?k=children+light+clothing&rh=p_90%3A8308921011&dc&crid=YCU4K3I0RGPA&qid=1715885731&rnid=8308919011&sprefix=children+light+clothing%2Caps%2C126&ref=sr_nr_p_90_2&ds=v1%3AVMBkX0u50hLpj9gMKPnZ8YMsFVlPJPNbhO5ankzbBiU`
        } else if(data.current.condition.text == 'Patchy light rain with thunder' || data.current.condition.text == 'Light rain' || data.current.condition.text == 'Moderate or heavy rain with thunder'){
          document.querySelector('.thereIcon').src = `D:/Programming/100Devs/HereToThere/js/icons/rain.png`;
          document.querySelector('.menLink').href = `https://www.amazon.com/s?k=mens+rain+clothing&rh=p_90%3A8308921011&dc&crid=1S4DBHU1IPQCE&qid=1715885850&rnid=8308919011&sprefix=mens+rainclothing%2Caps%2C127&ref=sr_nr_p_90_2&ds=v1%3Ao4TYA1lhRNaWJEzMSTywe%2FTSAj%2F0dyWhTGFp1iYsoCY`
          document.querySelector('.womenLink').href = `https://www.amazon.com/s?k=womens+rain+clothing&rh=p_90%3A8308921011&dc&crid=15DGRLOJ8P0OS&qid=1715885870&rnid=8308919011&sprefix=womensrain+clothing%2Caps%2C130&ref=sr_nr_p_90_2&ds=v1%3A%2FtvPUDPk5o%2F1K5QDGyv3dpi8EesTvEBBBz182V19qnM`
          document.querySelector('.childrenLink').href = `https://www.amazon.com/s?k=childrens+rain+clothing&rh=p_90%3A8308921011&dc&crid=2L63IWCQ2LTF2&qid=1715885889&rnid=8308919011&sprefix=childrensrain+clothing%2Caps%2C129&ref=sr_nr_p_90_2&ds=v1%3AXwEdrElYyf5uYBYZmLt44ZpFpy%2FkMF6v0WnuxlRlk4c`
        }


        //Setting Forecast High/Low Temps
        let highDate2 = data.forecast.forecastday[0].day.maxtemp_f;
        let highDate3 = data.forecast.forecastday[1].day.maxtemp_f;
        let highDate4 = data.forecast.forecastday[2].day.maxtemp_f;
        let highDate5 = data.forecast.forecastday[3].day.maxtemp_f;
        let highDate6 = data.forecast.forecastday[4].day.maxtemp_f;

        document.querySelector('.thereHighDate2').innerHTML = Math.floor(highDate2) + '°';
        document.querySelector('.thereHighDate3').innerHTML = Math.floor(highDate3) + '°';
        document.querySelector('.thereHighDate4').innerHTML = Math.floor(highDate4) + '°';
        document.querySelector('.thereHighDate5').innerHTML = Math.floor(highDate5) + '°';
        document.querySelector('.thereHighDate6').innerHTML = Math.floor(highDate6) + '°';

        let lowDate2 = data.forecast.forecastday[0].day.mintemp_f;
        let lowDate3 = data.forecast.forecastday[1].day.mintemp_f;
        let lowDate4 = data.forecast.forecastday[2].day.mintemp_f;
        let lowDate5 = data.forecast.forecastday[3].day.mintemp_f;
        let lowDate6 = data.forecast.forecastday[4].day.mintemp_f;
      
        document.querySelector('.thereLowDate2').innerHTML = Math.floor(lowDate2) + '°';
        document.querySelector('.thereLowDate3').innerHTML = Math.floor(lowDate3) + '°';
        document.querySelector('.thereLowDate4').innerHTML = Math.floor(lowDate4) + '°';
        document.querySelector('.thereLowDate5').innerHTML = Math.floor(lowDate5) + '°';
        document.querySelector('.thereLowDate6').innerHTML = Math.floor(lowDate6) + '°';
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
