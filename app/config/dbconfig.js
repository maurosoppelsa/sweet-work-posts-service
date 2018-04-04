/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

/* Init Author and driver tables if they don't exist */
let init = function () {
    db.run("CREATE TABLE if not exists authors (" +
        " author_id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " name TEXT," +
        " email TEXT," +
        " birthday DATETIME" +
        ")");

    db.run("CREATE TABLE if not exists posts (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " title TEXT," +
        " description TEXT," +
        " date DATETIME," +
        " auth_id INTEGER," +
        " FOREIGN KEY (auth_id) REFERENCES authors (author_id)" +
        "ON UPDATE SET NULL" +
        ")");
};

module.exports = {
    init: init,
    db: db
};

