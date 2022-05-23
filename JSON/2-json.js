//Challenge

const fs=require('fs')

const details={
    "name":"Andrew",
    "planet":"Earth",
    "Age":25
}
const personDetails=JSON.stringify(details)

fs.writeFileSync('freshjson.json',personDetails)

fs.readFileSync('freshjson.json');

const dataBuffer=fs.readFileSync('freshjson.json')
console.log(dataBuffer)

const dataString=dataBuffer.toString()
console.log(dataString)

const dataObject=JSON.parse(dataString)
console.log(dataObject)

dataObject.name="Poonam",
dataObject.Age=67
console.log(dataObject)
