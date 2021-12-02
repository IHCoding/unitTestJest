import CommentMessage from "./CommentMessage";

let jwtValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

class LocalStorageMock { accessToken = jwtValue; };
let store = new LocalStorageMock();


export class User {
    name;
    comments: CommentMessage[] = [];
    lastLoggedIn;

    constructor(name, date) {
        this.name = name;
        this.lastLoggedIn = date;
    }

    isLoggedIn() {
        return store.accessToken != null;
    }

    getLastLoggedInAt() {
        return this.lastLoggedIn;
    }

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

export default User;

