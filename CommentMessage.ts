
export class CommentMessage {
    author;
    message;
    id;
    repliedTo;
    createdAt;

    constructor(author, message, id, repliedTo) {
        this.author = author;
        this.message = message;
        this.id = id;
        this.repliedTo = repliedTo;
        this.createdAt = Date.now();
    }

    getMessage() {
        return this.message;
    }

    editMessage(message) {
        this.message = message;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    getAuthor() {
        return this.author;
    }

    getRepliedTo() {
        return this.repliedTo;
    }

    toString() {
        return this.message + ' ' + this.getAuthor() + ' ' + this.getCreatedAt();
    }
}

export default CommentMessage;