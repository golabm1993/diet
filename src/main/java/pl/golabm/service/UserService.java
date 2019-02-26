package pl.golabm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.stereotype.Service;
import pl.golabm.model.User;
import pl.golabm.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public DefaultOidcUser userData() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (DefaultOidcUser) authentication.getPrincipal();
    }

    public User findExisting(User user) {
        List<User> userList = (List<User>) userRepository.findAll();
        for (User u : userList) {
            if (user.getMail().equals(u.getMail())) {
                return user;
            }
        }
        return userRepository.save(user);
    }

    public User logedInUser() {
        return userRepository.findByMail(userData().getEmail());
    }
}
