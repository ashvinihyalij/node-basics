const fs = require('fs');
const path = require('path');
const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data', 'products.json'
);
function fetchProductsFromFile(callback) {    
    fs.readFile(filePath, (err, fileContent) => {
        if(err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }        
    });
}
module.exports = class product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;        
        this.price = price;
    }

    save() {
        fetchProductsFromFile(products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback){
        fetchProductsFromFile(callback);            
    }
}