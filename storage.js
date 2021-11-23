const fs = require('fs');

class Storage{
	constructor(path){
		this.path = './books.json';
	}
	
	read(title){
			const books = fs.readFileSync(this.path);
            parseBook = JSON.parse(books.toString());
			console.log(books);
		}
       
    }

module.exports = Storage;
