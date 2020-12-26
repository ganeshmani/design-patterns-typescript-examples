import IObserver from '../interface/IObserver'
import Author from './Author'
import Tweet from './Tweet'

export default class Follower implements IObserver {

    name : string

    constructor(name: string){
        this.name = name
    }

    onTweet(tweet: Tweet) {
        console.log( this.name+" you got tweet =>"+tweet.getMessage())
        return this.name+" you got tweet =>"+tweet.getMessage()
    }

}