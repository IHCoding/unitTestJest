import CommentMessage from "./CommentMessage";

let jwtValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

class LocalStorageMock { accessToken = jwtValue; };
let store = new LocalStorageMock();


export class User {
    name;
    comments: CommentMessage[] = [];
    lastLoggedIn;
    store;

    constructor(name) {
        this.name = name;
        this.lastLoggedIn = Date.now();
        this.store = new LocalStorageMock();
    }

    isLoggedIn() {
        return this.store.accessToken != null;
    }

    getLastLoggedInAt() {
        return this.lastLoggedIn;
    }

    logIn(userName, password) {
        this.store.accessToken = jwtValue;
    }

    logOut() {
        this.store.accessToken = null;
    }

    getName() { return this.name; }

    setName(name) { this.name = name; }

    canEdit(commentId) {
        let comment = this.comments.filter(obj => {
            return obj.id === commentId;
        });

        if (comment) { return true; }
        return false;
    }

    canDelete(commentId) {

        let comment = this.comments.filter(obj => {
            return obj.id === null;
        });

        if (comment) { return true; }
        return false;
    }
}

export default User;