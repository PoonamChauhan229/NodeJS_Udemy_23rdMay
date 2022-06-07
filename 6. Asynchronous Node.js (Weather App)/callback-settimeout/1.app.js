
const forecast=require('./utilis/forecast')
const geoCode=require('./utilis/geocode')

forecast(37.8267,-122.4233,(error,data)=>{
    // forecast(-75.7088,44.1545,(error,data)=>{
        console.log('Error',error)
        console.log('Data',data)
    })

    
// geoCode("12whatyuo",(error,data)=>{
geoCode("New York",(error,data)=>{
    console.log("Error",error)
    console.log("Data",data)
})

