var mysql = require('mysql');
//mysql.Promise = global.Promise;
//mysql.connect('mongodb://localhost/dbusers');

var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'janasenasevadal_db',
    user     : 'jspuser',
    password : 'jspSdal_DB@143',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});
