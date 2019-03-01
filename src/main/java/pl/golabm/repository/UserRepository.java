package pl.golabm.repository;

import org.springframework.data.repository.CrudRepository;
import pl.golabm.model.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByMail(String mail);
}
