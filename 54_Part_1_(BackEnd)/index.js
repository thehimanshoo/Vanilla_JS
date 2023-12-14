const os = require("os");

for(var properties in os){
    console.log(properties);
};

const OsFunction = () => {

    console.log("\n\n-------------------- OS Functions Starts from Here ---------------------------\n\n");

    console.log("Architecture :- " + os.arch());
    console.log("OS Version :- " + os.version());
    console.log("Server running time :- " + os.uptime());
    console.log("availableParallelism :- " + os.availableParallelism());
    console.log("\ncpus :- " + JSON.stringify(os.cpus()) + "\n");
    console.log("endianness :- " + os.endianness());
    console.log("freemem in bytes :- " + os.freemem());
    console.log("getPriority :- " + os.getPriority());
    console.log("homedir :- " + os.homedir());
    console.log("hostname :- " + os.hostname());
    console.log("loadavg :- " + os.loadavg());
    console.log("networkInterfaces :- " + os.networkInterfaces());
    console.log("platform :- " + os.platform());
    console.log("release :- " + os.release());
    console.log("setPriority :- " + os.setPriority(1));
    console.log("tmpdir :- " + os.tmpdir());
    console.log("totalmem in bytes :- " + os.totalmem());
    console.log("type :- " + os.type());
    console.log("userInfo :- " + os.userInfo());
    console.log("machine :- " + os.machine());
    console.log("\nconstants :- " + JSON.stringify(os.constants) + "\n");
    console.log("EOL :- " + os.EOL);
    console.log("devNull :- " + os.devNull);
};
OsFunction();