
import User from './User';
import CommentMessage from './CommentMessage';

describe('OOP Tests', function () {

    // Test for User class
    it('user test', () => {
        let user = new User("User 1");
        expect(user.getName()).toEqual('User 1');
    });

    it('set user', () => {
        let user = new User("User 1");
        user.setName('User 2');
        expect(user.name).toEqual('User 2');
    });

    it('logIn', () => {
        let user = new User("User 1");
        user.logIn('userName', 'password');
        expect(user.isLoggedIn()).toBe(true);
    });

    it('LogOut', () => {
        let user = new User("User 1");
        user.logIn('userName', 'password');
        user.logOut();
        console.log(user.store);
        expect(user.isLoggedIn()).toBe(false);
    });

    it(' get last logged in', () => {
        let user = new User("User 1");
        user.logIn('userName', 'password');
        expect(user.getLastLoggedInAt()).toBeDefined;
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

        const authorName = toStringObj.author.toString();
        const comment = toStringObj.message.toString();
        const id = toStringObj.id.toString();
        const repliedToMessage = toStringObj.repliedTo.toString();

        expect(authorName).toBe('author 1');
        expect(comment).toBe('comment');
        expect(id).toBe('1');
        expect(repliedToMessage).toBe('author 2');
    });

});