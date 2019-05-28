package program.services;

import org.springframework.stereotype.Service;
import program.domain.Tweet;
import twitter4j.Status;
import twitter4j.TwitterException;

import java.util.List;

@Service
public interface TwitterService {
    Tweet getTweetById(Integer id);
    Tweet addTweet(Tweet tweet);
    List<Tweet> getAllTweets();
    List<Status> getTimelineTweets() throws TwitterException;
    Tweet getTweetByImageUrl(String imageUrl);
}
