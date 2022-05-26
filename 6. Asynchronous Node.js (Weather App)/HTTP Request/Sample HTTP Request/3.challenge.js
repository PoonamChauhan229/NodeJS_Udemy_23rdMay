//Challenge:
//mapbox api
// Fire off a new request to the U.R.L. we explored in the browser 
// Have the request module pass it JSON
// Print both the latitude and longitude to the terminal 

// pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w

const request=require('request')
let url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w"

request({url:url,json:true},(error,response)=>{
    console.log(response.body.features[0].center[0])
    let long=response.body.features[0].center[0]
    let lat=response.body.features[0].center[1]
    console.log(`Longitide->${long}||Latitude->${lat}`)
})