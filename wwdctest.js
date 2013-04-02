// twilio setup
const TWILIO_PHONE = "enter_twilio_phone";
const YOUR_PHONE = "enter_your_phone";
const TWILIO_SID = "enter_twilio_sid";
const TWILIO_AUTH_TOKEN = "enter_twilio_sid";

// notification settings
const CALL_BY_TWILIO = 1
const TEXT_BY_TWILIO = 1

// end of configuration coce

found = false;

var twilio = require('twilio')(TWILIO_SID, TWILIO_AUTH_TOKEN;
var exec = require('child_process').exec;
var timers = require('timers');

function checkWWDCWebsite() {
	var wwdcCmd ='curl "https://developer.apple.com/wwdc/"';
	var child = exec(wwdcCmd, function(error, stdout, stderr){
		var regexp = new RegExp(/WWDC 2012. June 11-15 in San Francisco. It's the week we've all been waiting for./);
		var arrMatches = stdout.match(regexp);
		if (arrMatches == null) {
			found = true;
			// found!
			console.log("WWDC page changed!");
			if (CALL_BY_TWILIO) {
				twilio.makeCall({
					to:YOUR_PHONE,
					from: TWILIO_PHONE,
					url: "http://twimlets.com/echo?Twiml=%3CResponse%3E%0A%3CSay%20voice%3D%22woman%22%3EWWDC%20is%20here!%20Hurry%20to%20register!%3C%2FSay%3E%0A%3C%2FResponse%3E&"
				}, function(err, responseData) {
				});
			}
			if (TEXT_BY_TWILIO) {
				twilio.sendSms({
					to: YOUR_PHONE,
					from: TWILIO_PHONE,
					body: "WWDC is here! Hurry to register!"
				}, function(err, responseData) { 
				});
			}
		}
	});
}



var interval = timers.setInterval(function() {
	if (!found) {
		console.log("Check it...");
		checkWWDCWebsite();	
	} else {
		console.log("Already notified...");
	}
}, 5 * 1000);

