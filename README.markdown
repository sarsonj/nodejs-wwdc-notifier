#NodeJS WWDC Notifier

This is simple nodejs script, that will check WWDC homepage and notify you by SMS or/and phone call, when Apple updates it. It is extremelly useful if you want
to capture WWDC ticket, because it is usually sold out very quickly.

This script is supposed to run on your server as standalone service. When statred, it will check Apple WWDC site every 30 seconds and when the page changes from
WWDC 2012 site, you will be notified. This script works as deamon, it means that it is not supposed to run it by cron every minute or so. Just start it one!

##Setup
You need [Twilio](http://twilio.com) account to use this script. The free one demo account is good enough in case you use your primary cell phone number during
twilio registration.

Then you have to set few constants in the beginning of script:

* `TWILIO_SID` - ID that you find in Twilo account section
* `TWILIO_AUTH_TOKEN` - auth token, that you find in Twilio account section
* `TWILIO_PHONE` - outgoing phone number, that is assigned to you by Twilio
* `YOUR_PHONE` - your phone number (to that phone this script will text / call)
* `CALL_BY_TWILIO` and `TEXT_BY_TWILIO` - if you want to recieve SMS or/and phone call when WWDC announced

##Installation
Just clone this repository, configure required variables and install dependency libs (`npm install`).

Then start script using your favorite technique for running of deamon node-js scripts. Simple `nohup` will works as well. Or you can use something more
advace, like [Forever](http://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever).


