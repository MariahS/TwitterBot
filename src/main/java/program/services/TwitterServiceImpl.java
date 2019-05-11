package program.services;

import program.domain.Tweet;
import program.repositories.TwitterRepository;

import java.util.List;

public class TwitterServiceImpl implements TwitterService {

    private final TwitterRepository twitterRepository;

    public TwitterServiceImpl(TwitterRepository twitterRepository) {
        this.twitterRepository = twitterRepository;
    }

    @Override
    public Tweet getTweetById(Integer id) {
        return twitterRepository.findById(id).get();
    }

    @Override
    public List<Tweet> getAllTweets() {
        return (List<Tweet>) twitterRepository.findAll();
    }
}
