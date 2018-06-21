// arduino.js

(function(ext) {
    var device = null;
    var _rxBuf = [];

    // Sensor states:
   
  
	ext.resetAll = function(){};
	
	ext.runArduino = function(){};

	ext.forward = function(speed) {
       
       var header = "forward";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
       	 {
       	 	bytes[i]=bytes[i].charCodeAt(0);
       	 }
       device.send(bytes);
    };
    
  ext.backward = function(speed) {
       
       var header = "backward";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.turnleft = function(speed) {
       
       var header = "left";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.turnright = function(speed) {
       
       var header = "right";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.standUp = function(speed) {
       
       var header = "standUp";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.laydown = function(speed) {
       
       var header = "layDown";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.sleep = function(speed) {
       
       var header = "sleep";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.hello = function(speed) {
       
       var header = "hello";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.exercise = function(speed) {
       
       var header = "exercise";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.start = function(speed) {
       
       var header = "start";
       var space = " ";
       var Str = "";
       var arg = "T";
       var end = ";";
       var StrSpeed = ""; 
       var num1;
       var bytes =[];
       num1 = speed;
       StrSpeed = num1.toString();
       Str = Str.concat(header,space,arg,StrSpeed,end);
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.stand1 = function(speed) {
       
       var header = "stand1;";
       var bytes =[];
       Str = header;
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.stand2 = function(speed) {
       
       var header = "stand2;";
       var bytes =[];
       Str = header;
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };

    ext.stand3 = function(speed) {
       
       var header = "stand3;";
       var bytes =[];
       Str = header;
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
         {
          bytes[i]=bytes[i].charCodeAt(0);
         }
       device.send(bytes);
    };
    ////////////////////////////////////////////
	function sendPackage(argList){
		var bytes = [];
		for(var i=0;i<argList.length;++i){
			var val = argList[i];
			if(val.constructor == "[class Array]"){
				bytes = bytes.concat(val);
			}else{
				bytes.push(val);
			}
		}
		//bytes[2] = bytes.length - 3;
		device.send(bytes);
	}

		function runPackage(){
		sendPackage(arguments);
	}
    // Extension API interactions
    var potentialDevices = [];
    ext._deviceConnected = function(dev) {
        potentialDevices.push(dev);

        if (!device) {
            tryNextDevice();
        }
    }
    
    function processData(bytes) {}

    function tryNextDevice() {
        // If potentialDevices is empty, device will be undefined.
        // That will get us back here next time a device is connected.
        device = potentialDevices.shift();
        if (device) {
            device.open({ stopBits: 0, bitRate:9600, ctsFlowControl: 0 }, deviceOpened);
        }
    }

    var watchdog = null;
    function deviceOpened(dev) {
        if (!dev) {
            // Opening the port failed.
            tryNextDevice();
            return;
        }
        device.set_receive_handler('Spiderbot',processData);
    }

    ext._deviceRemoved = function(dev) {
        if(device != dev) return;
        device = null;
    };

    ext._shutdown = function() {
        if(device) device.close();
        device = null;
    };

    ext._getStatus = function() {
        if(!device) return {status: 1, msg: 'Arduino disconnected'};
        if(watchdog) return {status: 1, msg: 'Probing for Arduino'};
        return {status: 2, msg: 'Arduino connected'};
    };

    var descriptor = {};
	ScratchExtensions.register('Spiderbot', descriptor, ext, {type: 'serial'});
})({});
