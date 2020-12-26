import Author from "../module/Author";
import Tweet from "../module/Tweet";

export default interface IObserver {
    onTweet(tweet : Tweet): string
}