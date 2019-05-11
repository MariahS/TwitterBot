package program.repositories;

import program.domain.Subreddit;
import org.springframework.data.repository.CrudRepository;

public interface RedditRepository extends CrudRepository<Subreddit, Integer> {
}
