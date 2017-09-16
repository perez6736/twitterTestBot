console.log("Bot is starting.");

var Twit = require('twit');
var moment = require('moment');
var config = require('./config');

var T = new Twit(config);

var tweet = { 
	status: 'my first post from node!' 
}

//test a post request by tweeting something. 
T.post('statuses/update', tweet, tweeted);

// returns an integer that tells you how many days until xmas
function calculateDaysUntilXmas(){

}


function tweeted(err, data, response) {
	if(err){
		console.log("something went wrong");
		console.log(err);
	}
	else{
  		console.log("it worked!");
  	}
}