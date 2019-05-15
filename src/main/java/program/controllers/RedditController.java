package program.controllers;

import com.fasterxml.jackson.annotation.JsonRootName;
import org.springframework.beans.factory.annotation.Autowired;
import program.domain.Subreddit;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import program.services.RedditService;

import java.util.List;

@RestController
@RequestMapping("subreddits")
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

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/list")
    @ResponseBody
    public List<Subreddit> viewSubreddits(){
        return redditService.getAllSubreddits();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Subreddit addNewSubreddit(@RequestBody Subreddit subreddit){
        return redditService.addSubreddit(subreddit);
    }
}
