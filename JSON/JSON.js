//create a object

const book={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}

//JSON.stringify-takes object/array and converts into json representation
const bookJSON=JSON.stringify(book)
console.log(bookJSON);

//JSON.parse-take the json data and converts into object or array
const bookParse=JSON.parse(bookJSON);
console.log(bookParse);
console.log(bookParse.author)