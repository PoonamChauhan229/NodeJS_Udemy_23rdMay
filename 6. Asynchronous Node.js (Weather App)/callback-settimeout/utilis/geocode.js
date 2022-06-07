const request = require('request')
const geoCode=(address,callback)=>{
const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w`

request({url:url,json:true},(error,response)=>{
    if(error){
        callback("Check Internet Connectivity",undefined)
    }
    else if (response.body.features.length === 0) {
        callback("Try another search",undefined)
    }
    else{
        callback(undefined,{
            latitude:response.body.features[0].center[0],
            longitude:response.body.features[0].center[1],
            location:response.body.features[0].place_name
        })
    }
})
}

module.exports=geoCode;