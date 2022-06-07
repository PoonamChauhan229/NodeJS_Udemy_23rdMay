// Goal:Create a resuable function for getting the forecast
// 1.Setup the "forecast" function in utilis/forecast.js
// 2.Require the function in app.js and call it as shown below
// 3.The forecast function should have three potentail calls to callback:
    // -Low Level Error,pass string for error
    // -Coordinate eroor ,pass string for error
    // -Success , pass forecast string for data(same format as from before)

const request = require("request");

const forecast=(latitude,longitude,callback)=>{
    
let url=`http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=${latitude},${longitude}`
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Check Internet Connectivity",undefined)
        }
        else if(response.body.error){
            callback("Give Proper Forecast Details",undefined)
        }
        else{
          callback(undefined,  {
                observation_time:response.body.current.observation_time,
                temperature:response.body.current.temperature
            }
            )
        }


    })

}

module.exports=forecast;