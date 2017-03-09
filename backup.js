var request = require('request');
var schedule = require('node-schedule');
var moment = require('moment')


var appName = '';
var superSecretKey = '';
var url = 'https://' + appName +'.firebaseio.com/.json?auth=' + superSecretKey;

//start backing up evry sunday 03:30
var j = schedule.scheduleJob({hour: 3, minute: 30, dayOfWeek: 0}, function () {
    console.log("\nStarted backup for LeikangerTaxi:" + moment().format().toString());
    grabAndSaveData();
});

function grabAndSaveData(){
    var dateNow = moment().format().toString();
    request(url).pipe(fs.createWriteStream('backup/backup' + dateNow +'.json'));
    console.log('data is backedup with filename: backup ' + dateNow +'.json \n');
    deleteOldData();
}

function deleteOldData(){
    //should delete 1month old data.
}



