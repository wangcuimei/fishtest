var jquery = require("./core");
var JSON = require("json");

jquery._ajax = jquery.ajax;

// function encodeURIComponent(data){
// 	return data;
// }

var singleChannelStatus = {};

var isUnload = false;
jquery(window).on("beforeunload", function(){
	isUnload = true;
});

jquery.ajax = function(url, options){
	if ( typeof url === "object" ) {
		options = url;
		url = undefined;
	}

	var success = options.success || function(){},
		error = options.error || function(){},
		complete = options.complete || function(){};
	
	// 每次只能发送一个请求，请求响应前，不发送其他请求
	if(options.sendMode === "single"){
		if(singleChannelStatus[options.url]){
			return;
		}
		singleChannelStatus[options.url] = true;
		
		options.complete = function(){
			singleChannelStatus[options.url] = false;
			complete();
		};
	}
	
	if(options.dataType === "json" && !options.notAlert){
		options.error = function(){
			if(isUnload){
				return;
			}

			require.async("lib/message-box/index", function(messageBox){
				messageBox.error("未知错误");
			});
			error({
				code: 500,
				msg: "未知错误"
			});
		};
		
		options.success = function(result){
			var code = result.code;
			if(code >= 200 && code < 300 || code == 304){
				success(result);
			}else if(code >= 500 && code < 600){
				//alert(result.msg);
				//messageBox.error(result.msg);
				require.async("lib/message-box/index", function(messageBox){
					messageBox.error(result.msg);
				});
				error(result);
			}else if(code == 302){
				require.async("lib/load-mask/index", function(loadMask){
					loadMask(jquery(document.body));
				});
				if(!result.value || location.href.split("#")[0] === result.value){
					location.reload();
				}else{
					location.href = result.value;
				}
			}else if(code == 307){
				if(!result.value || location.href.split("#")[0] === result.value){
					location.reload();
				}else{
					window.open(result.value);
				} 
			}else{
				error(result);
			}
		};
	}
	if(options.data){
		if(typeof options.data === "string"){
			options.data = encodeURIComponent(options.data);
		}else{
			if(options.postDataType === "json"){
				options.data = JSON.stringify(options.data);
				options.contentType = "application/json;charset=utf-8";
			}else if(options.postDataType === "json.old"){
				options.data = encodeURIComponent(JSON.stringify(options.data));
			}else{
				for(var key in options.data){
					if(typeof options.data[key] !== "string"){
						options.data[key] = JSON.stringify(options.data[key]);
					}
					//options.data[key] = encodeURIComponent(options.data[key]);
				}
			}
			delete options.postDataType;
		}
	}
	options.cache = options.cache || false;
	return jquery._ajax(url, options);
};

module.exports = jquery;