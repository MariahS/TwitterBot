package services;

import domain.Subreddit;
import repositories.RedditRepository;

import java.util.List;

public class RedditServiceImpl implements RedditService {
    private final RedditRepository redditRepository;

    public RedditServiceImpl(RedditRepository redditRepository) {
        this.redditRepository = redditRepository;
    }

    @Override
    public Subreddit getSubredditById(Integer id) {
        return redditRepository.findById(id).get();
    }

    @Override
    public List<Subreddit> getAllSubreddits() {
        return (List<Subreddit>) redditRepository.findAll();
    }
}
