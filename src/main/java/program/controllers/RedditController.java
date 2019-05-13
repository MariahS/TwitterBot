package program.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import program.domain.Subreddit;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import program.services.RedditService;

@RestController
@RequestMapping("subreddit")
public class RedditController {
    @Autowired
    private final RedditService redditService;

    public RedditController(RedditService redditService) {
        this.redditService = redditService;
    }

    @GetMapping(value= "/edit/{id}")
    @ResponseBody
    public Subreddit getSubreddit (@PathVariable Integer id) {
        return redditService.getSubredditById(id);
    }

    @PostMapping("/edit")
    @ResponseBody
    public Subreddit editSubreddit(@RequestBody Subreddit subreddit){
        return redditService.updateSubreddit(subreddit);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Subreddit addNewSubreddit(@RequestBody Subreddit subreddit){
        return redditService.addSubreddit(subreddit);
    }
}
