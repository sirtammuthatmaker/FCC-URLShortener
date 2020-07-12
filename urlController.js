const URL = require('./models/url');
let urlCounter = 0;

const shortURLGenerator = function(url) {
    const shortURL = new URL({url:url,shortURL:++urlCounter});
    return shortURL;
}

const fetchURL = function(id) {
    
    return new Promise((resolve, reject)=>{


    URL.findOne({shortURL: id})
    .then(res => {
        console.log("fetched: "+res);
        if(res){
            resolve(res);
        } else {
            throw new Error("No URLs found!")
        }
    })
    
    .catch(err => {
        reject(err);
    });

    
});
}



module.exports = function(url){
    if(typeof(url) === 'number')
    {
        console.log("ID: "+url);
        return fetchURL(url);
    } else if (typeof(url) === 'string') {
        console.log("URL: "+url);
        return shortURLGenerator(url);
    }

}