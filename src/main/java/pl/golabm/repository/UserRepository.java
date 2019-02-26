package pl.golabm.repository;

import org.springframework.data.repository.CrudRepository;
import pl.golabm.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByMail(String mail);
}
