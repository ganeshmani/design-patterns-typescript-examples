export default class Tweet {

    message : string
    author: string

    constructor(message : string,author: string) {
        this.message = message
        this.author= author
    }

    getMessage() : string {
        return this.message+" Tweet from Author: "+this.author
    }
}