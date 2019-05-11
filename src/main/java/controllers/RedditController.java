package controllers;

import domain.Subreddit;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import services.RedditService;

@RestController
@RequestMapping(RedditController.BASE_URL)
public class RedditController {
    public static final String BASE_URL = "/api/v1/reddit";
    private final RedditService redditService;

    public RedditController(RedditService redditService) {
        this.redditService = redditService;
    }

    @GetMapping(path= "/get")
    @ResponseBody
    public Subreddit getSubreddit (@RequestParam Integer id) {
        return redditService.getSubredditById(id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Subreddit addNewSubreddit(@RequestBody Subreddit subreddit){
        return redditService.addSubreddit(subreddit);
    }
}
