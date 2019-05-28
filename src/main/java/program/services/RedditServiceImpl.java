package program.services;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import program.domain.Subreddit;
import program.domain.json.SubredditJson;
import program.repositories.RedditRepository;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

@Service
public class RedditServiceImpl implements RedditService {
    private final RedditRepository redditRepository;

    public RedditServiceImpl(RedditRepository redditRepository) {
        this.redditRepository = redditRepository;
    }

    @Override
    public Subreddit getSubredditById(Integer id) {
        return redditRepository.findById(id).get();
    }

    @Override
    public Subreddit updateSubreddit(Subreddit subreddit){
        return redditRepository.save(subreddit);
    }

    @Override
    public Subreddit addSubreddit(Subreddit subreddit){
        return redditRepository.save(subreddit);
    }

    @Override
    public List<Subreddit> getAllSubreddits() {
        return (List<Subreddit>) redditRepository.findAll();
    }

    public SubredditJson readRedditJson(String url) throws IOException {
        SubredditJson subredditJson = new SubredditJson();
        URL website = new URL(url);

        URLConnection connection = website.openConnection();
        connection.setRequestProperty("User-Agent", "Mozilla/5.0"); // prevents http error 429

        BufferedReader in = new BufferedReader( new InputStreamReader(connection.getInputStream(),"UTF8"));
        String jsonText = readJsonString(in);

        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        subredditJson = mapper.readValue(jsonText, SubredditJson.class);
        in.close();
        return subredditJson;
    }

    public String readJsonString(Reader rd) throws IOException {
        StringBuilder sb = new StringBuilder();
        int cp;
        while ((cp = rd.read()) != -1) {
            sb.append((char) cp);
        }
        return sb.toString();
    }
}
