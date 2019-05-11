package repositories;

import domain.Tweet;
import org.springframework.data.repository.CrudRepository;

public interface TwitterRepository extends CrudRepository<Tweet, Integer> {
}
