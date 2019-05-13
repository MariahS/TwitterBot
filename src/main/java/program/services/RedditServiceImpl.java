package program.services;

import org.springframework.stereotype.Service;
import program.domain.Subreddit;
import program.repositories.RedditRepository;

import java.util.List;

@Service
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
    public Subreddit updateSubreddit(Subreddit subreddit){
        return redditRepository.save(subreddit);
    }

    @Override
    public Subreddit addSubreddit(Subreddit subreddit){
        return redditRepository.save(subreddit);
    }

    @Override
    public List<Subreddit> getAllSubreddits() {
        return (List<Subreddit>) redditRepository.findAll();
    }
}
