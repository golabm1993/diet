package pl.golabm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.stereotype.Service;
import pl.golabm.model.Meal;
import pl.golabm.model.User;
import pl.golabm.repository.MealRepository;
import pl.golabm.repository.UserRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final EmailService emailService;
    private final MealRepository mealRepository;

    @Autowired
    UserService(final UserRepository userRepository, final EmailService emailService, final MealRepository mealRepository) {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.mealRepository = mealRepository;
    }

    private DefaultOidcUser getOidcUser() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ((DefaultOidcUser) authentication.getPrincipal());
    }

    public Optional<User> getLoggedUser() {
        final DefaultOidcUser user = getOidcUser();
        return userRepository.findByMail(user.getEmail());
    }

    public Boolean sendNotification() {

        Iterable<User> users = userRepository.findAll();

        for (User user : users) {
            List<Meal> mealList = mealRepository.findAllByUserId(user.getId());
            List<Meal> filtered = mealList.stream().filter(meal -> {
                LocalDate now = LocalDate.now();
                LocalDate mealDate = meal.getMealTime();

                return isTheDateToday(now, mealDate);

            }).collect(Collectors.toList());
            if (filtered.isEmpty())
                emailService.sendSimpleMessage(user.getMail());
        }
        return false;
    }

    private boolean isTheDateToday(LocalDate now, LocalDate mealDate) {
        return mealDate.getDayOfMonth() == now.getDayOfMonth() && mealDate.getMonth() == now.getMonth()
                && mealDate.getYear() == now.getYear();
    }
}
