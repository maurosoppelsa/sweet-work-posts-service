/* Load Author entity */
const Author = require('../model/author');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Author Data Access Object
 */
class AuthorDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT author_id, name, email, birthday FROM authors WHERE author_id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Author(row.author_id, row.name, row.email, row.birthday));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM authors";
        return this.common.findAll(sqlRequest).then(rows => {
            let authors = [];
            for (const row of rows) {
                authors.push(new Author(row.author_id, row.name, row.email, row.birthday));
            }
            return authors;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM authors";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Author
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Author) {
        let sqlRequest = "UPDATE authors SET " +
            "name=$name, " +
            "email=$email, " +
            "birthday=$birthday, " +
            "WHERE author_id=$author_id";

        let sqlParams = {
            $name: Author.name,
            $email: Author.email,
            $birthday: Author.birthday,
            $id: Author.author_id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Author
     * returns database insertion status
     */
    create(Author) {
        let sqlRequest = "INSERT into authors (name, email, birthday) " +
            "VALUES ($name, $email, $birthday)";
        let sqlParams = {
            $name: Author.name,
            $email: Author.email,
            $birthday: Author.birthday
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided id in the database
     * @params Author
     * returns database insertion status
     */
    createWithId(Author) {
        let sqlRequest = "INSERT into authors (author_id, name, email, bitrthday) " +
            "VALUES ($author_id, $name, $email, $birthday)";
        let sqlParams = {
            $author_id: Author.author_id,
            $name: Author.name,
            $email: Author.email,
            $birthday: Author.birthday
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM authors WHERE author_id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM authors WHERE author_id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = AuthorDao;