package program.services;

import org.springframework.stereotype.Service;
import program.domain.Tweet;
import program.repositories.TwitterRepository;
import twitter4j.*;

import java.util.List;

@Service
public class TwitterServiceImpl implements TwitterService {

    // change to implement API controllers to retrieve tweets
    // delete Twitter Repository
    private final TwitterRepository twitterRepository;

    public TwitterServiceImpl(TwitterRepository twitterRepository) {
        this.twitterRepository = twitterRepository;
    }

    public List<Status> getTimelineTweets() throws TwitterException {
        Twitter twitter = new TwitterFactory().getInstance();
        User user = twitter.verifyCredentials();
        List<Status> statuses = twitter.getHomeTimeline();
        return statuses;
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
