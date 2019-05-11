package services;

import domain.Subreddit;

import java.util.List;

public interface RedditService {
    Subreddit getSubredditById(Integer id);
    Subreddit addSubreddit(Subreddit subreddit);
    List<Subreddit> getAllSubreddits();
}
