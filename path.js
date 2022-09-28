const url = require('url');

const address="http://localhost:8080/index.html?user=edureka&password=12345"

const parseAddress= url.parse(address,true)


console.log("this is urlparse : ", parseAddress.search)