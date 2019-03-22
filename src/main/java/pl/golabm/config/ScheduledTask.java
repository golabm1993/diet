package pl.golabm.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import pl.golabm.service.UserService;

@Configuration
@EnableScheduling
public class ScheduledTask {

    private final UserService userService;

    @Autowired
    ScheduledTask(UserService userService) {
        this.userService = userService;
    }

    @Scheduled(cron = "0 0 20 * * *")
    public Boolean scheduledNotification() {
        return userService.sendNotification();
    }
}
