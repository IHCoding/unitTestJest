
let jwtValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

class LocalStorageMock { accessToken = null; };
let store = new LocalStorageMock();

Date.now = jest.fn(() => new Date(Date.UTC(2021, 12, 1)).valueOf());

class User {
    name;
    comments = [];

    constructor(name) {
        this.name = name;
    }

    isLoggedIn() {
        return store.accessToken != null;
    }

    getLastLoggedInAt() { }

    logIn(userName, password) {
        store.accessToken = jwtValue;
    }

    logOut() {
        store.accessToken = null;
    }

    getName() { return this.name; }

    setName(name) { this.name = name; }

    // should it be return true or false?!
    canEdit(commentId) {
        let comment = this.comments.find(
            (value) => {
                if (value === commentId) {
                    return value;
                }
            }
        );

        if (comment) { return true; }
        return true;
    }


    // should it be return true or false?!
    canDelete(comment) {
        this.comments.find((value) => value = null);
        return true;
    }
}

class Moderator { }

class Admin { }


class CommentMessage {
    author;
    message;
    id;
    repliedTo;
    createdAt;

    comments = [];

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



// import { User, Moderator, Admin, Comment } from "./solution";

describe('OOP Tests', function () {

    // Test for User class
    it('example tests', () => {
        let user = new User("User 1");
        expect(user.getName()).toEqual('User 1');
    });

    it('example set user', () => {
        let user = new User("User 1");
        user.setName('User 2');
        expect(user.name).toEqual('User 2');
    });

    it('example logIn', () => {
        let user = new User("User 1");
        user.logIn('userName', 'password');
        expect(store.accessToken).toEqual(jwtValue);
    });

    it('example LogOut', () => {
        let user = new User("User 1");
        user.logOut();
        expect(store.accessToken).toEqual(null);
    });

    it(' when user logs out isLogedIn should be false ', () => {
        let user = new User("User 1");
        user.logIn('userName', 'password');
        user.logOut();

        expect(user.isLoggedIn()).toEqual(false);
    });

    it('when user logged in, isLoggedIn will be true', () => {
        let user = new User("User 1");
        user.logIn('userName', 'password');

        expect(user.isLoggedIn()).toEqual(true);
    });

    it('user can edit comment from list of comments', () => {
        let user = new User("User 1");
        user.comments[1] = new CommentMessage('author', 'message', 1, 'string');

        expect(user.canEdit(1)).toEqual(true);
    });

    it('user can delete comment from list of comments', () => {
        let user = new User("User 1");
        user.comments[1] = new CommentMessage('author', 'message', 1, 'string');

        expect(user.canDelete(1)).toEqual(true);
    });


    // Tests for CommentMessage
    it('create new Comment', () => {
        let comment = new CommentMessage('author', "comment 1", 1, 'string');
        expect(comment.getMessage);
    });

    it('should get message', () => {
        let message = new CommentMessage('author', "comment", 1, 'string');
        expect(message.getMessage()).toEqual('comment');
    });

    it('should set message', () => {
        let message = new CommentMessage('author', "message 1", 1, 'string');
        message.editMessage('message 1');
        expect(message.message).toEqual('message 1');
    });

    it('should get message', () => {
        let message = new CommentMessage('author', "comment", 1, 'string');
        expect(message.getMessage()).toEqual('comment');
    });

    it('should get message created at', () => {
        let message = new CommentMessage('author', "comment", 1, 'string');

        expect(message.getCreatedAt()).toBeLessThanOrEqual(Date.now());
    });

    it('should get the comment author', () => {
        let author = new CommentMessage('author 1', "comment", 1, 'string');
        expect(author.getAuthor()).toEqual('author 1');
    });

    it('should get the replied to', () => {
        let repliedTo = new CommentMessage('author 1', "comment", 1, 'author 2');
        expect(repliedTo.getRepliedTo()).toEqual('author 2');
    });

    it('should show to string the values', () => {
        let toStringObj = new CommentMessage('author 1', "comment", 1, 'author 2');

        expect(toStringObj).toEqual([
            expect.objectContaining({
                author: expect.any(String),
                comment: expect.any(String),
                id: expect.any(Number),
                repliedTo: expect.any(String)
            })
        ]);

        const authorName = toStringObj[0].authorName.toString();
        expect(authorName).toBe('author Name');

        const comment = toStringObj[1].comment.toString();
        expect(comment).toBe('comment 1');

        const id = toStringObj[2].id.toString();
        expect(id).toBe('1');

        const repliedToMessage = toStringObj[3].repliedTo.toString();
        expect(repliedToMessage).toBe('author 2');
    });


});