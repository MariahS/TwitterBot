package program.services;

import org.springframework.stereotype.Service;
import program.domain.Tweet;

import java.util.List;

@Service
public interface TwitterService {
    Tweet getTweetById(Integer id);
    Tweet addTweet(Tweet tweet);
    List<Tweet> getAllTweets();
}
