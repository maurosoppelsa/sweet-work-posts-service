/* Load Post entity */
const Post = require('../model/post');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Post Data Access Object
 */
class PostDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, title, description, date FROM posts WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Post(row.id, row.title, row.description, row.date));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM posts";
        return this.common.findAll(sqlRequest).then(rows => {
            let posts = [];
            for (const row of rows) {
                posts.push(new Post(row.id, row.title, row.description, row.date, row.auth_id));
            }
            return posts;
        });
    };

    /**
     * Finds all related entities.
     * @return all entities
     */
    findPostsByAuthor(id) {
        let sqlRequest = "SELECT * FROM posts WHERE auth_id="+id;
        return this.common.findAll(sqlRequest).then(rows => {
            let posts = [];
            for (const row of rows) {
                posts.push(new Post(row.id, row.title, row.description, row.date, row.auth_id));
            }
            return posts;
        });
    };
    
    findPostByTitle(title) {
        let sqlRequest = "SELECT * FROM posts WHERE title LIKE '%"+title +"%'";
        return this.common.findAll(sqlRequest).then(rows => {
            let posts = [];
            for (const row of rows) {
                posts.push(new Post(row.id, row.title, row.description, row.date, row.auth_id));
            }
            return posts;
        });
    };

    getPostPagination(page, size){
        let sqlRequest = "SELECT id, title, description, date, auth_id from posts ORDER BY date DESC LIMIT "+size + " OFFSET " + ((page -1) * size);
        return this.common.findAll(sqlRequest).then(rows => {
            let posts = [];
            for (const row of rows) {
                posts.push(new Post(row.id, row.title, row.description, row.date, row.auth_id));
            }
            return posts;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM posts";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Post
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Post) {
        let sqlRequest = "UPDATE posts SET " +
            "name=$name, " +
            "description=$description, " +
            "date=$date " +
            "WHERE id=$id";

        let sqlParams = {
            $name: Post.title,
            $description: Post.description,
            $car: Post.date,
            $id: Post.id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Post
     * returns database insertion status
     */
    create(Post) {
        let sqlRequest = "INSERT into posts (title, description, date, auth_id ) " +
            "VALUES ($title, $description, $date, $auth_id)";
        let sqlParams = {
            $title: Post.title,
            $description: Post.description,
            $date: Post.date,
            $auth_id: Post.auth_id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided in the database
     * @params Post
     * returns database insertion status
     */
    createWithId(Post) {
        let sqlRequest = "INSERT into posts (id, title, description, date, auth_id) " +
            "VALUES ($id, $title, $description, $date, $auth_id)";
        let sqlParams = {
            $id: Post.id,
            $title: Post.title,
            $description: Post.description,
            $date: Post.date,
            $auth_id: Post.auth_id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM posts WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM posts WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.existsOne(sqlRequest, sqlParams);
    };
}

module.exports = PostDao;