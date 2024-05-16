# Here To There

<a href="https://ibb.co/52VM4PG">
  <img src="https://i.ibb.co/Tr5v2sY/Demo-Picture-Resize.jpg" alt="Demo-Picture-Resize" border="0">
</a>

<a href="https://www.loom.com/share/57badd54f31b4b07a05ddae606419659?sid=091cdd1a-34a0-44bc-b5b0-cdaf0891c261">View Demo</a>


### About
This application was created to solve an everyday travelling issue of seeing my current weather and the weather of the destination I was travelling too.
Normally I'd flip back and forth between specific cities but this program I created allowed me to compare them side by side along with a 5 day forecast.
The program makes calls to weatherAPI for the weather and Google Places API for the autocompletion of the destination inputs.


# Built With
<a href="https://imgbb.com/"><img src="https://i.ibb.co/9T534Jb/java-Script-Logo.png" alt="java-Script-Logo" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/WP9pb69/htmlLogo.png" alt="htmlLogo" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/mXqtV2y/cssLogo.png" alt="cssLogo" border="0"></a>




# Getting Started
### Installation

1. Get a free API key at [https://www.weatherapi.com/my/](https://www.weatherapi.com/my/)
2. Get a free API key at [https://developers.google.com/maps/documentation/places/web-service/get-api-key](https://developers.google.com/maps/documentation/places/web-service/get-api-key)
3. Enable 'Places API' under APIs and Services in the google cloud console.
4. Clone the repo
   ```sh
   git clone https://github.com/DenyusKeys/hereToThere.git
   ```
5. Input your Weather API key into lines 18 and 104 of the main.js file
   ```sh
   const key = 'YOUR_API_KEY'
   ```
6. Input your Google Cloud API key into line 16 of the index.html file
   ```sh
   <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
   ```

# Usage
Users should be able to:
1. Begin typing a destination in either the "Here" or "There" box.  Google autocomplete will assist with the exact destination.
2. Upon clicking the "Get Weather" button, the weather cards will be updated with your destination's weather and forecast.
3. Clickable links for recommended last minute clothing are dependent on the "There" destination and will take you to clothing ideas
   from Amazon.

# What I learned
Google's autocomplete has always been an amazing feature whether it's for searching or maps and being able to finally incorporate it into a project was huge for me!
Pulling values from the input and using them alongside Google's autocomplete allowed for any city to be located with a few letters.
Working through the JSON returned from WeatherAPI allowed me to practice my dot notation for pulling specific metrics from the API.
Another huge hurdle was how to dynamically get the forecasted dates to display correctly which required manipulating the Date object a few ways to pull and display what I needed
and I was successfully able to do that.  Onwards and upwards!



