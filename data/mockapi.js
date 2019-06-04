
const apiURL = require('../src/api/url.js');
const delay = require("mocker-api/utils/delay");


module.exports = delay(Object.entries(apiURL).reduce((tot,item) => {
        let [key,value] = item;
        if (tot[`POST ${value}`]){
            return tot;
        }else{
            key && (tot[`POST ${value}`] = require(`./${key}.js`) || {});
            return tot;
        }
},{}), 300);
