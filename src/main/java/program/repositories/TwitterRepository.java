package program.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import program.domain.Tweet;
import org.springframework.data.repository.CrudRepository;

public interface TwitterRepository extends CrudRepository<Tweet, Integer> {

    @Query("FROM Tweet t WHERE t.url =:url")
    Tweet findTweetByImageUrl(@Param("url")String imageUrl);
}
