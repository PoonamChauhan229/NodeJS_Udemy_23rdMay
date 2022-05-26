const request=require('request')

let url="http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=37.8267,-122.4233"

request({url:url},(error,response)=>{
    console.log(response)//JSON String
    console.log(JSON.parse(response.body))
    console.log("With parsing")
    let data=JSON.parse(response.body)
    console.log(data.current)
})

// without parsing -JSON Data and json:true

request({url:url,json:true},(error,response)=>{
    console.log("Without parsing")
    console.log(response.body.current)
})