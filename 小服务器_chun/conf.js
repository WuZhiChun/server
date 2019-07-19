var fs = require("fs");

//加载配置文件
var globalConf = {};
var conf = fs.readFileSync("server.conf");
var confs = conf.toString().split("\r\n");
for(var i = 0 ; i < confs.length ; i ++ ) {
    var tempConf = confs[i].split("=");
    if(tempConf.length < 2){
        continue;
    } else {
        globalConf[tempConf[0]] = tempConf[1];
    }
}

console.log(globalConf);
if (globalConf["path_position"] == "relative") {
    globalConf.basePath = __dirname + globalConf.path;
    console.log(globalConf.basePath);
} else {
    globalConf.basePath = globalConf.path;
    console.log(globalConf.basePath);
}

module.exports = globalConf;