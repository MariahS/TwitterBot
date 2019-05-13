package program.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import program.domain.Tweet;
import program.services.TwitterService;

@RestController
@RequestMapping("twitter")
public class TwitterController {
    @Autowired
    private final TwitterService twitterService;

    public TwitterController(TwitterService twitterService) {
        this.twitterService = twitterService;
    }

    @GetMapping(path= "/view")
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
