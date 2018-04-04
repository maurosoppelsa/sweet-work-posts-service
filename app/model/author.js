/**
 * Author Entity (ES6 Class)
 */

class Author {
    constructor(id, name, email, birthday) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
    }
}

module.exports = Author;