
import User from './User';
import CommentMessage from './CommentMessage';


let jwtValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

class LocalStorageMock { accessToken = jwtValue; };
let store = new LocalStorageMock();


describe('OOP Tests', function () {

    // Test for User class
    it('user test', () => {
        let user = new User("User 1", Date.now);
        expect(user.getName()).toEqual('User 1');
    });

    it('set user', () => {
        let user = new User("User 1", Date.now);
        user.setName('User 2');
        expect(user.name).toEqual('User 2');
    });

    it('logIn', () => {
        let user = new User("User 1", Date.now);
        user.logIn('userName', 'password');
        expect(store.accessToken).toBe(jwtValue);
    });

    it('example LogOut', () => {
        let user = new User("User 1", Date.now);
        user.logOut();

        expect(store.accessToken).toEqual(jwtValue);
    });

    it(' when user logs out isLogedIn should be false ', () => {
        let user = new User("User 1", Date.now);
        user.logIn('userName', 'password');
        user.logOut();

        expect(user.isLoggedIn()).toEqual(false);
    });

    it('when user logged in, isLoggedIn will be true', () => {
        let user = new User("User 1", Date.now);
        user.logIn('userName', 'password');

        expect(user.isLoggedIn()).toEqual(true);
    });

    it('user can edit comment from list of comments', () => {
        let user = new User("User 1", Date.now);
        user.comments[1] = new CommentMessage('author', 'message', 1, 'string');

        expect(user.canEdit(1)).toEqual(true);
    });

    it('user can delete comment from list of comments', () => {
        let user = new User("User 1", Date.now);
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

    // it('should show to string the values', () => {
    //     let toStringObj = new CommentMessage('author 1', "comment", 1, 'author 2');
    //     this.message + ' ' + this.getAuthor + ' ' + this.getCreatedAt;
    //     expect(toStringObj.toString()).toContain('comment author 1');
    // });

});