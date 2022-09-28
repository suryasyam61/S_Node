const os = require("os");

console.log("plateform: ", os.platform());
console.log("architecture: ", os.arch());
console.log("CPUS: ", os.cpus().length);
console.log("WIFI: ", os.networkInterfaces().Ethernet);

const net_int = os.networkInterfaces()

let no_of_network_interfaces=0;
for (let key in net_int){

    console.log(key)
    let net_infos=net_int[key];

    net_infos.forEach(element => {
no_of_network_interfaces ++;
console.log("\tinterface: ")

for ( let attr in element){
    console.log("\t\t"+attr,": " + element[attr])
}

    });
}

console.log("no.of networks: "+ no_of_network_interfaces);

console.log("Memory: ", os.totalmem());
console.log("user info: ", os.userInfo());