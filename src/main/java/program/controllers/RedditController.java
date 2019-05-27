package program.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import program.domain.Subreddit;
import program.services.RedditService;

import java.util.*;

@RestController
@RequestMapping("/subreddits")
public class RedditController {
    @Autowired
    private final RedditService redditService;

    public RedditController(RedditService redditService) {
        this.redditService = redditService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Subreddit getSubreddit(@PathVariable("id") Integer id) {
        Subreddit subreddit = redditService.getSubredditById(id);

        return subreddit;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Subreddit> getAllSubreddits(){
        List<Subreddit> subredditList = redditService.getAllSubreddits();

        return subredditList;
    }

}