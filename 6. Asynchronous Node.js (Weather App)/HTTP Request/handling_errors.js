const request=require('request')
let url="http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=37.8267,-122.4233";
request({url:url,json:true},(error,response)=>{
    console.log(error)//low level of error
})
let url1="http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query"
request({url:url1,json:true},(error,response)=>{
if(error){
    console.log("Unable to connect to Weather App")
}
else if(response.body.error){
    console.log("Unable to find the exact location")
}
else{
    console.log(response.body.current)
}
})