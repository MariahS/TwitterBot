package program.services;

import org.springframework.stereotype.Service;
import program.domain.Subreddit;

import java.util.List;

@Service
public interface RedditService {
    Subreddit getSubredditById(Integer id);
    Subreddit updateSubreddit(Subreddit subreddit);
    Subreddit addSubreddit(Subreddit subreddit);
    List<Subreddit> getAllSubreddits();
}
