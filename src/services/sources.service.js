var request = require('superagent');

function toSourceObject(key, value) {
    value.siteName = key;
    return value;
}

function getSourcesArray(sourcesObject) {
    let sourcesArr = [];
    for (const prop in sourcesObject) {
        if(!sourcesObject[prop].hasOwnProperty('articleLink')) continue;
        sourcesArr.push(toSourceObject(prop, sourcesObject[prop]));
    }
    return sourcesArr;
}

module.exports = {
    getSources() {
        return request.get('https://rdg6sppiog.execute-api.us-east-1.amazonaws.com/prod').then((res) => {
            const data = JSON.parse(res.text);
            return getSourcesArray(data.Items[0]);
        }, (err) => {
            console.log('error');
            console.log(err);
            return {};
        });
    }
}