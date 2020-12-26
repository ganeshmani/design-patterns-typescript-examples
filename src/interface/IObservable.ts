import Tweet from "../module/Tweet";

export default interface IObservable{

    sendTweet(tweet : Tweet): any
}