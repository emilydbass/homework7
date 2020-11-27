function gettingJSON(){

    //api key
    let key = "4f2176c09d5afd710c905e5fd7a744d0";

    //location - set to default ann arbor
    let loc = document.querySelector("#location").value;
    if (loc == ""){
        loc = "Ann+Arbor";
    }

    
    
    //if not checked format is imperial, or if celcius is clicked then its metric.
    //set default temperature format if one isn't provided to farenheit
    let format;

    if (document.querySelector("#celcius").checked){
        format = document.querySelector("#celcius").getAttribute('value');
    }
    else {
        format = document.querySelector("#fahrenheit").getAttribute('value');
    }

    //console.log("Format is " + format);

    //set the query  
   let query;
    // Your code here.  
    if (Number.isInteger(parseInt(loc))){
        console.log("Testing this is a number");
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + loc + "&APPID=" + key + "&units=" + format;
    }
    else{
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + key + "&units=" + format;
    }
    
    console.log("Query is :" + query);
    
    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
    let location = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        let text = json["weather"][0]["description"];
        location.innerHTML = json.name;
        temp.innerHTML = json["main"].temp +' with '+ text;
        let link = "http://openweathermap.org/img/wn/" + json["weather"][0]["icon"] + ".png";
        tempImg.setAttribute("src", link);
        tempImg.setAttribute("alt", text);
        tempImg.setAttribute("title", "Weather Image")
        document.getElementById("forecast").style.display = "block";

    });
}
