package pl.golabm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.stereotype.Service;
import pl.golabm.model.User;
import pl.golabm.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private DefaultOidcUser getOidcUser() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ((DefaultOidcUser) authentication.getPrincipal());
    }

    public Optional<User> getLoggedUser() {
        final DefaultOidcUser user = getOidcUser();
        return userRepository.findByMail(user.getEmail());
    }
}
