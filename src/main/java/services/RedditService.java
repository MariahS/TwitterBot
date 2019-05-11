package services;

import domain.Subreddit;

import java.util.List;

public interface RedditService {
    Subreddit getSubredditById(Integer id);
    List<Subreddit> getAllSubreddits();
}
