const fs=require('fs')

const book={
    title:"Ego is the Enemy",
    author:"Ryan Holiday"
}

const bookJSON=JSON.stringify(book)//converted into JSON representation

fs.writeFileSync('newjson.json',bookJSON);//create new and add the JSON data to it

//-----------Access the property of the json from newjson.js file

fs.readFileSync('newjson.json')
const dataBuffer=fs.readFileSync('newjson.json')//get data in buffer in bytes
console.log(dataBuffer);

const dataString=dataBuffer.toString();//json string
console.log(dataString)

const dataObject=JSON.parse(dataString);//object
console.log(dataObject)

console.log(dataObject.title)//accessing the property
console.log(dataObject.author)//accessing the property

//Challenge