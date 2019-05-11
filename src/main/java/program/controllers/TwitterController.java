package program.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import program.domain.Tweet;
import program.services.TwitterService;

@RestController
public class TwitterController {
    public static final String BASE_URL = "/api/v1/twitter";
    private final TwitterService twitterService;

    public TwitterController(TwitterService twitterService) {
        this.twitterService = twitterService;
    }

    @GetMapping(path= "/get")
    @ResponseBody
    public Tweet getTweetById (@RequestParam Integer id) {
        return twitterService.getTweetById(id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Tweet addNewTweet(@RequestBody Tweet tweet){
        return twitterService.addTweet(tweet);
    }
}
