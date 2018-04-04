/**
 * Post Entity (ES6 Class)
 */

class Post {
    constructor(id, title, description, date, auth_id) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.auth_id = auth_id;
    }
}

module.exports = Post;