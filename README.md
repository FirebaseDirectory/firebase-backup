# firebase-backup
Just a simple backup script for the firebase database

When running the script will store the json from the firebase every sunday 03:00.
The json file is stored in the folder backup, at the same location as the script. 

## Install & Setup

To install the server:

 			npm install

In the code add the name of the app in the following row.

 			var appName = '';
    
Add then the super secret key for your firebase app. This could be found at the following URL: https://console.firebase.google.com/project/_/settings/database

 			var superSecretKey = '';

To run the server

 			node backup.js
