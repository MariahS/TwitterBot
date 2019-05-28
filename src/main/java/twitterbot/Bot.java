package twitterbot;

import program.domain.Subreddit;
import program.domain.SubredditPost;
import program.domain.Tweet;
import program.domain.json.SubredditJson;
import program.services.RedditService;
import program.services.RedditServiceImpl;
import program.services.TwitterService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Bot {
    private final RedditService redditService;
    private final TwitterService twitterService;

    public Bot(RedditService redditService, TwitterService twitterService){
        this.redditService = redditService;
        this.twitterService = twitterService;
    }

    public void RedditProcess() throws IOException {
        Subreddit subreddit = getRandomSubreddit();
        SubredditJson subredditJson = getSubredditJson(subreddit.getUrl());
        List<SubredditPost> subredditPosts = extractPostsFromJson(subredditJson);
        List<SubredditPost> verifiedPosts = checkForDuplicates(subredditPosts);

        if(verifiedPosts.size() > 0){
            for (SubredditPost post: verifiedPosts) {
                Tweet tweet = new Tweet();
                tweet.setUrl(post.getImageUrl());
                tweet.setMessage(post.getTitle());
                tweet.setPosted(false);

                twitterService.addTweet(tweet);
            }
        }

    }

    public void TwitterProcess(){

    }

    // Check for duplicate posts
    public List<SubredditPost> checkForDuplicates(List<SubredditPost> postList){
        List<SubredditPost> verifiedPostList = new ArrayList<>();

        for(SubredditPost post : postList) {
            Tweet tweet = twitterService.getTweetByImageUrl(post.getImageUrl());
            if(tweet != null)
            {
                verifiedPostList.add(post);
            }
        }
        return verifiedPostList;
    }

    // Extract posts from json
    public List<SubredditPost> extractPostsFromJson(SubredditJson subredditJson){
        List<SubredditPost> postList = new ArrayList<>();

        for (SubredditJson.Child child : subredditJson.data.children) {
            if(child.data.url.contains(".jpg") || child.data.url.contains(".png")) {
                SubredditPost subredditPost = new SubredditPost();
                subredditPost.setImageUrl(child.data.url);
                subredditPost.setTitle(child.data.title);

                postList.add(subredditPost);
            }
        }

        return postList;
    }

    // get json from website
    public SubredditJson getSubredditJson(String url) throws IOException {
        SubredditJson subredditJson = redditService.readRedditJson(url);

        return subredditJson;
    }

    // gets random subreddit to scrape
    public Subreddit getRandomSubreddit(){
        List<Subreddit> subredditList = redditService.getAllSubreddits();
        Random rand = new Random();
        int randomNumber = rand.nextInt(subredditList.size());

        return subredditList.get(randomNumber);
    }
}
