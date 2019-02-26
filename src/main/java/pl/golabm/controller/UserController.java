package pl.golabm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.golabm.dto.UserDTO;
import pl.golabm.model.User;
import pl.golabm.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String displayUser() {
        return userService.userData().getGivenName();
    }

    @PostMapping
    public User saveUser(UserDTO userDTO) {
        userDTO.setFirstName(userService.userData().getGivenName());
        userDTO.setLastName(userService.userData().getFamilyName());
        userDTO.setMail(userService.userData().getEmail());

        User user = userDTO.toEntity();
        return userService.findExisting(user);
    }
}
