console.log("Bot is starting.");

var Twit = require('twit');
var moment = require('moment');
var config = {
  consumer_key:         process.env.consumer_key,
  consumer_secret:      process.env.consumer_secret,
  access_token:         process.env.access_token,
  access_token_secret:  process.env.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}

var T = new Twit(config);

var now = moment(); 
var nowinSeconds = moment(now).unix();

var year = moment().year(); //current year we are in 

var christmasDay = moment([year, 11, 25]);
var christmasDayInSeconds = moment(christmasDay).unix();
var nextChristmas = moment([year, 11, 25]).add(1, "y");

var the26thOfDec = moment([year, 11, 26]);
var the26thOfDecInSeconds = moment(the26thOfDec).unix();
//need to calculate up to the last second of the 31st 
var the31stOfDec = moment([year, 11, 31, 23, 59, 59]);
var the31stOfDecInSeconds = moment(the31stOfDec).unix();

// returns bool 
// params - now in seconds 
// tells you if todays date is between the 26th and the 31st 
function isbetween26and31(now){ //return a boolean    
    if(now >= the26thOfDecInSeconds && now<=the31stOfDecInSeconds){
        console.log("its some date between the 26th and 31st of dec");
        return true;
    }
    return false; 
}

// tells you if today is christmas or  not. 
//params - now in seconds - integer
//returns bool 
function isTodayChristmas(now){//return boolean 
    if(now >= christmasDayInSeconds && now < the26thOfDecInSeconds){
        console.log("ITS XMAS");
        return true;
    }
    console.log("not xmas :(");
    return false; 
}

// tells you how many days are left until christmas 
// returns a string days left till Christmas  
function howManyDaysLeftUntilXmas(){
    var daysLeft;
    if(isTodayChristmas(nowinSeconds)){
        return "Todays is Christmas!"
    }

    else if(isbetween26and31()){ //calculate how many days are left till next years christmas 
        daysLeft = nextChristmas.diff(now, 'days');
        return "There are " + daysLeft + " until Christmas";

        
    }

    else{ //calculate how may days are left until this christmas 
       daysLeft = christmasDay.diff(now, 'days'); 
       return "There are " + daysLeft + " until Christmas";
    }  
}


var tweet = { 
	status: howManyDaysLeftUntilXmas() 
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