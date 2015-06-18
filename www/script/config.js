//获取全局参数函数
function GETSYSTEMCONFIG(type) {
    'use strict';
    switch (type) {
        case "local" :
            return {
                type: "local",
                URL1: "http://snsdev.midea.com/",
                URL2: "http://snsdev.midea.com/",
                URL3: "http://snsdev.midea.com/",
                userID: "1izXGn700Hf%2F6U%2BYg8rwxA2tpBP36LpZal28Epy9zc9vaGRy39AkvQ%3D%3D",
                debug: true,
                alertDebug: false
            };

        case "dev" :
            return {type: "dev", basicURL: "http://snsdev.midea.com/", userID: "", debug: false, alertDebug: true};

        case "beta" :
            return {type: "beta", basicURL: "http://snsdev.midea.com/", userID: "", debug: false, alertDebug: false};

        case "pro" :
            return {type: "pro", basicURL: "http://sns.midea.com/", userID: "", debug: false, alertDebug: false};

        default:
            alert("System Info : Config Error!");
    }
}

//DEBUG函数中获取时间函数
function GETTIME() {
    var sysTime = new Date();
    var hour = (sysTime.getHours() > 9) ? sysTime.getHours() : '0' + sysTime.getHours();
    var minutes = (sysTime.getMinutes() > 9) ? sysTime.getMinutes() : '0' + sysTime.getMinutes();
    var seconds = (sysTime.getSeconds() > 9) ? sysTime.getSeconds() : '0' + sysTime.getSeconds();
    var milliseconds = sysTime.getMilliseconds();
    return (hour + ":" + minutes + ":" + seconds + ":" + milliseconds);
}

//DEBUG函数
function DEBUG(data, method) {
    var methodName = method ? method : "SYSTEM";
    if (SYSTEMCONFIG.alertDebug === true) {
        alert("System time : " + GETTIME() + "\n" + "Method name : " + methodName + "\n" + JSON.stringify(data));
    } else if (SYSTEMCONFIG.debug === true) {
        console.log("System time : " + GETTIME() + "\n" + "Method name : " + methodName);
        console.log(data);
        console.log("#######################################");
        console.log("");
    }
}

var SYSTEMCONFIG = GETSYSTEMCONFIG("local"); // "local" , "dev" , "beta", "pro"

DEBUG(SYSTEMCONFIG,'System Config Setting');