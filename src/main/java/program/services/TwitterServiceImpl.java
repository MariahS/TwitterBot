package program.services;

import org.springframework.stereotype.Service;
import program.domain.Tweet;
import program.repositories.TwitterRepository;

import java.util.List;

@Service
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
    public Tweet addTweet(Tweet tweet){
        return twitterRepository.save(tweet);
    }

    @Override
    public List<Tweet> getAllTweets() {
        return (List<Tweet>) twitterRepository.findAll();
    }
}
