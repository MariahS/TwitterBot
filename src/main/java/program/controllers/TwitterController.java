package program.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import program.domain.Tweet;
import program.helpers.CommonHelper;
import program.services.TwitterService;
import twitter4j.MediaEntity;
import twitter4j.Status;
import twitter4j.TwitterException;
import twitter4j.URLEntity;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("tweets")
public class TwitterController {
    @Autowired
    private final TwitterService twitterService;

    public TwitterController(TwitterService twitterService) {
        this.twitterService = twitterService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Tweet getTweetById (@RequestParam Integer id) {
        return twitterService.getTweetById(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Tweet> getListOfTweets() throws TwitterException {
        List<Tweet> tweets = new ArrayList<>();
        List<Status> statuses = twitterService.getTimelineTweets();
        for (Status s:statuses) {
            Tweet tweet = new Tweet();
            tweet.setId((int) s.getId());

            // get tweet media
            MediaEntity[] mediaEntities = s.getMediaEntities();
            String url = mediaEntities[0].getMediaURLHttps();
            tweet.setUrl(url);

            // remove url in message and set to tweet
            CommonHelper helper = new CommonHelper();
            String message = helper.removeUrl(s.getText());
            tweet.setMessage(message);

            // set posted to true
            tweet.setPosted(true);

            tweets.add(tweet);
        }

        return tweets;
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Tweet addNewTweet(@RequestBody Tweet tweet){
        return twitterService.addTweet(tweet);
    }


}
