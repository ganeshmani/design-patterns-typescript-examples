import IObservable from "../interface/IObservable";
import Tweet from "./Tweet";
import Follower from './Follower'
export default class Author implements IObservable {



    protected observers : Follower[] = []

    notify(tweet : Tweet){
        this.observers.forEach(observer => {
            observer.onTweet(tweet)
        })
    }

    subscribe(observer : Follower){
        this.observers.push(observer)
    }

    sendTweet(tweet : Tweet) {
        this.notify(tweet)
    }
}