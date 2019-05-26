package program.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import program.domain.Subreddit;

@Repository
public interface RedditRepository extends CrudRepository<Subreddit, Integer> {
}