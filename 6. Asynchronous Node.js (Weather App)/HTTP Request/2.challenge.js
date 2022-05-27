//Challenge:
// Print something like the following 
// it is currently 9 degrees out.It feels like five degrees out.
// same output in Faeheint -Unit chnge

const request=require('request')
let url="http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=37.8267,-122.4233&units=f"


request({url:url,json:true},(error,response)=>{
    console.log(response.body)
    console.log(`${response.body.current.weather_descriptions[0]},it is currently ${response.body.current.temperature} degrees out.It feels like ${response.body.current.feelslike} degrees out.`)
})