// Goal:Handle errors for geocode request

// 1.Setup an error-handler for low-level errors
// 2.Test by disabling network request and running the app
// 3.Setup error handling for no matching results
// 4.Test by altering the search term and running the app

const request = require('request')
// let url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w"

let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/12feel.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w"
request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(error)
    }
    else if (response.body.features.length === 0) {
        console.log("No Data Found, Enter proper Location")
    } else {
        console.log(response.body.features)
        console.log(response.body.features[0].center[0])
        let long = response.body.features[0].center[0]
        let lat = response.body.features[0].center[1]
        console.log(`Longitide->${long}||Latitude->${lat}`)
    }

})
