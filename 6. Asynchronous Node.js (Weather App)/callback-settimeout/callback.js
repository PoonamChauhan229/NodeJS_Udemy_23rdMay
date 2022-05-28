console.log("HI")

// without callback
const geoCode=(address,callback)=>{
    const data={
        lat:0,
        lon:0
    }
    return data
}
console.log(geoCode("Philadelphia"))


// with callback=>thro error as undefined
const geoCode1=(address,callback)=>{
    setTimeout(()=>{
        const data={
            lat:0,
            lon:0
        }
        return data
    })
}

console.log(geoCode1("Philadelphia"))

// with callback function

const geoCode3=(address,callback)=>{
    setTimeout(()=>{
        const data={
            lat:0,
            lon:0
        }
        callback(data)
    })
}
// 1 way
geoCode3("Philadelphia",(data)=>{
    console.log(data)
})

// 2nd way
geoCode3("Philadelphia", newCallback)

function newCallback(data){
    console.log(data)
}