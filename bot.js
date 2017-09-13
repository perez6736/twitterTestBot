console.log("Bot is starting.");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var tweet = { 
	status: 'my first post from node!' 
}

//test a post request by tweeting something. 
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
	if(err){
		console.log("something went wrong");
		console.log(err);
	}
	else{
  		console.log("it worked!");
  	}
}