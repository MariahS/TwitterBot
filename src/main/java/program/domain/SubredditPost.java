package program.domain;

import com.fasterxml.jackson.annotation.JsonTypeName;

@JsonTypeName(value = "subredditPost")
public class SubredditPost {
    public SubredditPost(){}

    public SubredditPost(final String title, final String imageUrl){
        this.title = title;
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return String.format("subredditPost[id=%d, title='%s', imageUrl='%s']", id, title, imageUrl);
    }

    private int id;
    private String title;
    private String imageUrl;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
