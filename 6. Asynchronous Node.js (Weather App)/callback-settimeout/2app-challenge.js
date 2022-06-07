
// Accept Location via command line argument
// 1.Access the command line argument without yargs
// 2.Use the string value as an input for geoCode
// 3.Only geocode if a location was provided
// 4.Test your work with couple of locations

const forecast=require('./utilis/forecast')
const geoCode=require('./utilis/geocode')

  
    console.log(process.argv)
    console.log(process.argv[2])

    const address=process.argv[2]

    if(!address){
        console.log("Please provide an Location")
    }else{
        geoCode(address,(error,data)=>{
            if(error){
                return error
            }
            console.log("Data",data)
    
            forecast(data.longitude,data.latitude,(error,forecastData)=>{
                if(error){
                    return error
                }
                console.log('Data',forecastData)
            
            
                })
        })
    }
   

