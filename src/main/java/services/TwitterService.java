package services;

import domain.Tweet;

import java.util.List;

public interface TwitterService {
    Tweet getTweetById(Integer id);
    List<Tweet> getAllTweets();
}
